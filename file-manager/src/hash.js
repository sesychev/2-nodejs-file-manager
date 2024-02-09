import { readFile } from "fs/promises";
import crypto from "crypto";

const hash = async (file) => {
  try {
    const hash = crypto.createHash("sha256");
    const data = await readFile(file);
    console.log(hash.update(data).digest("hex"));
    console.log(`You are currently in ${process.cwd()}`);
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default hash;
