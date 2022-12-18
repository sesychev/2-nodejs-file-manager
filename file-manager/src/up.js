import { operation, input, dir } from "./errors.js";
import { homedir } from "os";
import process from "process";

const up = () => {
  const workingFolderPath = homedir();
  if (workingFolderPath === process.cwd()) {
    dir(process.cwd());
    return;
  } else process.chdir("../");
  dir(process.cwd());
};

export default up;
