import { operation, input, dir } from "./errors.js";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import process from "process";

const cp = async (oldName, newName) => {
  const workingFolderPath = homedir();

  const readPath = path.isAbsolute(oldName)
    ? oldName
    : path.join(process.cwd(), oldName);

  const newPath = path.isAbsolute(newName)
    ? newName
    : path.join(process.cwd(), newName);

  try {
    await fs.promises.access(readPath);
    const readStream = fs.createReadStream(readPath);
    const writeStream = fs.createWriteStream(
      path.resolve(newPath, path.parse(readPath).base)
    );
    readStream.pipe(writeStream);
    writeStream.on("finish", () => console.log("Copying completed"));
    dir(path.resolve(newPath));
  } catch (e) {
    operation(e);
  }
};

export default cp;
