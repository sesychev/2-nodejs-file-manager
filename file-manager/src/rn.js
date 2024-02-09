import fs from "fs";
import path from "path";

const rn = async (oldName, newName) => {
  try {
    fs.rename(path.resolve(oldName), path.resolve(newName), (e) => {
      if (e) console.log(e.message);
      console.log(`You are currently in ${process.cwd()}`);
    });
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default rn;
