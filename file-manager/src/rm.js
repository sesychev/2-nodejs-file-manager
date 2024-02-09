import fs from "fs";
import path from "path";
import process from "process";

const rm = async (file) => {
  try {
    fs.unlink(path.resolve(file), (e) => {
      if (e) console.log(e.message);
      console.log(`You are currently in ${process.cwd()}`);
    });
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default rm;
