import { operation, input, dir } from "./errors.js";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import process from "process";

const add = async (file) => {
  // create empty file
  const workingFolderPath = homedir();
  const relativePath = path.join(process.cwd(), file);
  const absolutePath = path.resolve(file);

  const readPath = path.isAbsolute(file) ? absolutePath : relativePath;
  try {
    await fs.promises.access(readPath);
    fs.createWriteStream(readPath, "utf-8");
    dir(path.parse(readPath).dir);
  } catch (e) {
    operation(e);
  }
};

export default add;
