package is.clipperz.backend

import is.clipperz.backend.services.{ tollByteSize, PRNG }
import zio.test.Gen
import zio.ZIO

object TestUtilities:
  def getBytesGen(prng: PRNG, size: Int): Gen[Any, Array[Byte]] =
    Gen.fromZIO(
      prng
        .nextBytes(size)
        .catchAll(_ => ZIO.succeed(Array.emptyByteArray))
    )