import fs from "fs";
import path from "path";
import process from "process";
import zlib from "zlib";
import { access } from "fs/promises";

const decompress = async (source, destination) => {
  try {
    await access(path.resolve(source));
    await access(path.resolve(destination));

    const readStream = fs.createReadStream(path.resolve(source));
    const writeStream = fs.createWriteStream(
      path.resolve(destination, path.basename(source, ".br"), { flags: "wx" })
    );
    const brotli = zlib.createBrotliDecompress();

    readStream
      .pipe(brotli)
      .pipe(writeStream)
      .on("finish", () => {
        console.log("Done decompressing.");
        console.log(`You are currently in ${process.cwd()}`);
      });
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default decompress;
