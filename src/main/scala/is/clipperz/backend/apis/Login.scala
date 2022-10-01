package is.clipperz.backend.apis

import zio.{ ZIO }
import zio.json.{ EncoderOps }
import zhttp.http.{ Http, Method, Path, PathSyntax, Response, Status }
import zhttp.http.* //TODO: fix How do you import `!!` and `/`?
import is.clipperz.backend.data.HexString
import is.clipperz.backend.functions.{ fromStream }
import is.clipperz.backend.services.{
  SessionManager,
  SrpManager,
  SRPStep1Data,
  SRPStep2Data
}
import is.clipperz.backend.Main.ClipperzHttpApp

val loginApi: ClipperzHttpApp = Http.collectZIO {
  case request @ Method.POST -> !! / "login" / "step1" / c =>
    ZIO.service[SessionManager]
      .zip(ZIO.service[SrpManager])
      .zip(ZIO.attempt(request.headers.headerValue(SessionManager.sessionKeyHeaderName).get))
      .zip(ZIO.succeed(request.bodyAsStream))
      .flatMap((sessionManager, srpManager, sessionKey, content) =>
        fromStream[SRPStep1Data](content)
        .flatMap(loginStep1Data => {
          if HexString(c) == loginStep1Data.c then
            for {
              session <- sessionManager.getSession(sessionKey) //create new session
              (step1Response, session) <- srpManager.srpStep1(loginStep1Data, session)
              _ <- sessionManager.saveSession(session)
            } yield step1Response
          else  
            ZIO.fail(new Exception("c in request path differs from c in request body "))
        })
      )
      .either
      .map(e => e.fold(err => { println(s"LOGIN STEP 1: ERROR ${err}"); Response(status = Status.InternalServerError) }, (step1Response) => Response.json(step1Response.toJson)))

  case request @ Method.POST -> !! / "login" / "step2" / c => 
    ZIO.service[SessionManager]
      .zip(ZIO.service[SrpManager])
      .zip(ZIO.attempt(request.headers.headerValue(SessionManager.sessionKeyHeaderName).get)) // TODO: return significant status in response
      .zip(ZIO.succeed(request.bodyAsStream))
      .flatMap((sessionManager, srpManager, sessionKey, content) =>
        fromStream[SRPStep2Data](content)
        .flatMap(loginStep2Data => {
            for {
              session <- sessionManager.getSession(sessionKey)
              // _ <- ZIO.succeed(println(s"OPTIONAL SESSION: ${optionalSession}"))
              (step2Response, session) <- srpManager.srpStep2(loginStep2Data, session)
              _ <- sessionManager.saveSession(session)
            } yield step2Response
        })
      )
      .either
      .map(e => e.fold(err => { println(s"LOGIN STEP 2: ERROR ${err}"); Response(status = Status.InternalServerError) }, (step2Response) => Response.json(step2Response.toJson)))

}