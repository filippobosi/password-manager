package is.clipperz.backend.services

import org.scalacheck.Test

import java.io.File
import java.nio.charset.StandardCharsets
import java.nio.file.{ Files, Paths, FileSystems }
import java.security.MessageDigest
import scala.language.postfixOps
import zio.{ Chunk, ZIO }
import zio.stream.{ ZStream, ZSink }
import zio.test.Assertion.{ nothing, throws, throwsA, fails, isSubtype, anything }
import zio.test.{ ZIOSpecDefault, assertTrue, assert, assertCompletes, assertZIO, TestAspect }
import zio.json.EncoderOps
import zhttp.http.{ Version, Headers, Method, URL, Request, HttpData }
import zhttp.http.*
import is.clipperz.backend.Main
import java.nio.file.Path
import _root_.is.clipperz.backend.exceptions.ResourceNotFoundException
import is.clipperz.backend.functions.FileSystem
import is.clipperz.backend.exceptions.EmptyContentException
import zio.Clock
import zio.Clock.ClockLive
import zio.test.TestClock
import zio.Duration

object KeyBlobArchiveSpec extends ZIOSpecDefault:
  val blobBasePath = FileSystems.getDefault().nn.getPath("target", "tests", "archive", "blobs").nn
  val keyBlobArchive = KeyBlobArchive.FileSystemKeyBlobArchive(blobBasePath, 1)

  val testContent = ZStream.fromIterable("testContent".getBytes().nn)
  val failingContent = ZStream.never
  val testKey = "testKey"
  val failingKey = "failingKey"

  def spec = suite("KeyBlobArchive")(
    test("getBlob - fail") {
      assertZIO(keyBlobArchive.getBlob(testKey).exit)(fails(isSubtype[ResourceNotFoundException](anything)))
    } +
    test("saveBlob - success") {
      for {
        fiber <- keyBlobArchive.saveBlob(testKey, testContent).fork
        _ <- TestClock.adjust(Duration.fromMillis(10))
        _ <- fiber.join
        content <- keyBlobArchive.getBlob(testKey)
        result <- testContent.zip(content).map((a, b) => a == b).toIterator.map(_.map(_.getOrElse(false)).reduce(_ && _))
      } yield assertTrue(result)
    } + 
    test ("saveBlob with failing stream - success") {
      for {
       fiber <- keyBlobArchive.saveBlob(failingKey, failingContent).fork
        _ <- TestClock.adjust(Duration.fromMillis(10))
        res <- assertZIO(fiber.await)(fails(isSubtype[EmptyContentException](anything)))
      } yield assertTrue(res.isSuccess)
    } +
    test("getBlob - success") {
      for {
        content <- keyBlobArchive.getBlob(testKey)
        result <- testContent.zip(content).map((a, b) => a == b).toIterator.map(_.map(_.getOrElse(false)).reduce(_ && _))
      } yield assertTrue(result)
    } + 
    test("deleteBlob - success") {
      for {
        res <- keyBlobArchive.deleteBlob(testKey)
      } yield assertTrue(res)
    } + 
    test("deleteBlob - fail") {
      for {
        res <- keyBlobArchive.deleteBlob(testKey)
      } yield assertTrue(!res)
    }
  ) @@ 
    TestAspect.sequential @@ 
    TestAspect.beforeAll(ZIO.succeed(FileSystem.deleteAllFiles(blobBasePath.toFile().nn))) @@
    TestAspect.afterAll(ZIO.succeed(FileSystem.deleteAllFiles(blobBasePath.toFile().nn)))