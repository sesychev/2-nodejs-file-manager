import rm from "./rm.js";
import { operation, input, dir } from "./errors.js";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import process from "process";

const mv = async (oldName, newName) => {
  const workingFolderPath = homedir();
  const relativePath = path.join(process.cwd(), oldName);
  const absolutePath = path.resolve(oldName);

  const readPath = path.isAbsolute(oldName) ? absolutePath : relativePath;

  const newPath = path.isAbsolute(newName)
    ? path.resolve(newName)
    : path.join(process.cwd(), newName);

  try {
    await fs.promises.access(readPath);
    const readStream = fs.createReadStream(readPath);
    const writeStream = fs.createWriteStream(
      path.resolve(newPath, path.parse(readPath).base)
    );

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
      rm(readPath);
      console.log("Moving completed");
    });
  } catch (e) {
    operation(e);
  }
};

export default mv;
