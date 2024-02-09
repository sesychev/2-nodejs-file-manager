import { cpus, homedir, userInfo, arch, EOL as eol } from "os";

const os = async (param) => {
  try {
    switch (param) {
      case "--EOL":
        console.log(JSON.stringify(eol));
        break;
      case "--cpus":
        for (const cpu of cpus())
          console.log(
            `Overall amount of CPUs = ${cpus().length}: ${cpu.model}`
          );
        break;
      case "--homedir":
        console.log(homedir());
        break;
      case "--username":
        console.log(userInfo().username);
        break;
      case "--architecture":
        console.log(arch());
        break;
      default:
        console.log(`Invalid input`);
    }

    console.log(`You are currently in ${process.cwd()}`);
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default os;
