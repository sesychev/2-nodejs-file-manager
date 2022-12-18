import { operation, input, dir } from "./errors.js";
import { cpus, homedir, userInfo, arch, EOL as eol } from "os";

const os = (param) => {
  const workingFolderPath = homedir();
  if (param === "EOL") console.log(JSON.stringify(eol));
  if (param === "cpus") {
    for (const cpu of cpus())
      console.log(`Overall amount of CPUs = ${cpus().length}: ${cpu.model}`);
  }
  if (param === "homedir") console.log(homedir());
  if (param === "username") console.log(userInfo().username);
  if (param === "architecture") console.log(arch());
  dir(workingFolderPath);
};

export default os;
