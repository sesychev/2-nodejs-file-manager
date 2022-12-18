import { operation, input, dir } from "./errors.js";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import process from "process";

const cd = async (testFolder) => {
  // Change the directory
  const workingFolderPath = homedir();
  const relativePath = path.join(process.cwd(), testFolder);
  const absolutePath = path.resolve(process.cwd(), testFolder);

  const readPath = path.isAbsolute(testFolder) ? absolutePath : relativePath;

  try {
    await fs.promises.access(readPath);
    process.chdir(readPath);
    // Printing current directory
    dir(process.cwd());
  } catch (e) {
    // Printing error if occurs
    operation(e);
  }

  return process.cwd();
};

export default cd;
