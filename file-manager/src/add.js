import fs from "fs/promises";
import path from "path";
import process from "process";

const add = async (file) => {
  try {
    const fd = await fs.open(path.resolve(file), "w");
    await fd.close();

    console.log("Empty file was created.");
    console.log(`You are currently in ${process.cwd()}`);
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default add;
