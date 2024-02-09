import path from "path";
import process from "process";

const cd = (test) => {
  try {
    process.chdir(path.resolve(process.cwd(), test));

    console.log(`You are currently in ${process.cwd()}`);
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default cd;
