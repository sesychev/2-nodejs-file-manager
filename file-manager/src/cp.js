import fs from "fs";
import path from "path";
import process from "process";
import { access } from "fs/promises";

const cp = async (source, destination) => {
  try {
    await access(path.resolve(source));
    await access(path.resolve(destination));

    const readStream = fs.createReadStream(path.resolve(source), "utf8");
    const writeStream = fs.createWriteStream(
      path.resolve(destination, path.basename(source))
    );

    writeStream.on("error", (e) => {
      console.log(`error: ${e.message}`);
    });

    readStream.pipe(writeStream);

    console.log(`You are currently in ${process.cwd()}`);
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default cp;
