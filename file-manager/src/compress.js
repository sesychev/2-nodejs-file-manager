import fs from "fs";
import path from "path";
import process from "process";
import zlib from "zlib";
import { access } from "fs/promises";

const compress = async (source, destination) => {
  try {
    await access(path.resolve(source));
    await access(path.resolve(destination));

    const WRITE_FILE_NAME = path.join(
      path.resolve(destination),
      path.parse(source).base + ".br"
    );

    const readStream = fs.createReadStream(path.resolve(source));
    const writeStream = fs.createWriteStream(WRITE_FILE_NAME);
    const brotli = zlib.createBrotliCompress();

    readStream
      .pipe(brotli)
      .pipe(writeStream)
      .on("finish", () => {
        console.log("Done compressing.");
        console.log(`You are currently in ${process.cwd()}`);
      });
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default compress;
