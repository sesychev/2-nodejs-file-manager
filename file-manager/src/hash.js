import { operation, input, dir } from "./errors.js";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import process from "process";
import crypto from "crypto";

const hash = async (file) => {
  const workingFolderPath = homedir();
  const relativePath = path.join(process.cwd(), file);
  const absolutePath = path.resolve(file);

  const readPath = path.isAbsolute(file) ? absolutePath : relativePath;

  try {
    await fs.promises.access(readPath);

    const md5sum = crypto.createHash("md5");

    let s = fs.ReadStream(readPath);

    s.on("data", (data) => md5sum.update(data));

    s.on("end", () => {
      console.log(md5sum.digest("hex"));
    });

    dir(path.parse(readPath).dir);
  } catch (e) {
    operation(e);
  }
};

export default hash;
