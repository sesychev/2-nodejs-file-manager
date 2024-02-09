import up from "#up.js";
import ls from "#ls.js";
import cd from "#cd.js";
import cat from "#cat.js";
import add from "#add.js";
import rn from "#rn.js";
import cp from "#cp.js";
import mv from "#mv.js";
import rm from "#rm.js";
import os from "#os.js";
import hash from "#hash.js";
import compress from "#compress.js";
import decompress from "#decompress.js";
import { homedir } from "os";

try {
  const args = process.argv.slice(2);
  if (args.length <= 0) console.log(`Invalid input`);
  const username = process.argv[2].split("=").slice(-1);
  const start = `Welcome to the File Manager, *${username}*!`;
  const finish = `Thank you for using File Manager, *${username}*, goodbye!`;

  process.chdir(homedir());
  console.log(start);

  process.stdin.setEncoding("utf-8");
  process.stdin.on("data", (chunk) => {
    //if (!chunk) console.log(`Invalid input`);
    const data = chunk.toString("utf8").trim();
    const [command, first, second] = data.split(" ");

    switch (command) {
      case ".exit":
        process.stdout.write(finish);
        process.exit();
      case "up":
        up();
        break;
      case "cd":
        cd(first);
        break;
      case "ls":
        ls();
        break;
      case "cat":
        cat(first);
        break;
      case "add":
        add(first);
        break;
      case "rn":
        rn(first, second);
        break;
      case "cp":
        cp(first, second);
        break;
      case "mv":
        mv(first, second);
        break;
      case "rm":
        rm(first);
        break;
      case "os":
        os(first);
        break;
      case "hash":
        hash(first);
        break;
      case "compress":
        compress(first, second);
        break;
      case "decompress":
        decompress(first, second);
        break;
      default:
        console.log(`Invalid input`);
    }
  });
  process.on("SIGINT", () => {
    process.stdout.write(finish);
    process.stdout.write("\n");
    process.exit();
  });
} catch (e) {
  console.error(e);
}
