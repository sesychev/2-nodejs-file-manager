import { operation, input, dir } from "./errors.js";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import process from "process";

const rn = async (oldName, newName) => {
  const workingFolderPath = homedir();
  const relativePath = path.join(process.cwd(), oldName);
  const absolutePath = path.resolve(oldName);

  const readPath = path.isAbsolute(oldName) ? absolutePath : relativePath;

  try {
    await fs.promises.access(readPath);
    fs.rename(
      readPath,
      path.resolve(path.parse(readPath).dir, newName),
      (err) => {
        if (err) console.log("ERROR: " + err);
      }
    );
    dir(path.parse(readPath).dir);
  } catch (e) {
    operation(e);
  }
};

export default rn;
