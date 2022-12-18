import { operation, input, dir } from "./errors.js";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import process from "process";

const cat = async (file) => {
  const workingFolderPath = homedir();
  const relativePath = path.join(process.cwd(), file);
  const absolutePath = path.resolve(file);

  const readPath = path.isAbsolute(file) ? absolutePath : relativePath;

  try {
    // The check succeeded
    await fs.promises.access(readPath);
    let readable = fs.createReadStream(readPath, {
      encoding: "utf-8",
    });
    readable.pipe(process.stdout); //вывод текста в консоль
    dir(path.parse(readPath).dir);
  } catch (e) {
    // The check failed
    operation(e);
  }
};

export default cat;
