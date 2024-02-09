import fs from "fs";
import path from "path";
import process from "process";

const cat = (file) => {
  try {
    fs.access(path.resolve(file), (e) => {
      if (e) console.log(e.message);

      fs.createReadStream(path.resolve(file), {
        encoding: "utf-8",
      })
        .on("data", (chunk) => {
          console.log(chunk.toString());
        })
        .on("end", () => {
          console.log(`You are currently in ${process.cwd()}`);
        });
    });
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default cat;
