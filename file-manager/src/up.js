import { homedir } from "os";
import process from "process";

const up = async () => {
  try {
    if (homedir() === process.cwd()) {
      console.log(`You are currently in ${process.cwd()}`);
      return;
    } else {
      process.chdir("../");
      console.log(`You are currently in ${process.cwd()}`);
    }
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default up;
