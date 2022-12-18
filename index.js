import up from "./file-manager/src/up.js";
import cd from "./file-manager/src/cd.js";
import ls from "./file-manager/src/ls.js";
import cat from "./file-manager/src/cat.js";
import add from "./file-manager/src/add.js";
import rn from "./file-manager/src/rn.js";
import cp from "./file-manager/src/cp.js";
import mv from "./file-manager/src/mv.js";
import rm from "./file-manager/src/rm.js";
import os from "./file-manager/src/os.js";
import hash from "./file-manager/src/hash.js";
import { compress, decompress } from "./file-manager/src/press.js";

import { input, dir } from "./file-manager/src/errors.js";
import process from "process";
import path from "path";
import { fileURLToPath } from "url";
import { homedir } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const currentFolder = path.join(__dirname);
const workingFolder = homedir();

const username = process.argv[2].slice(11);

const start = `Welcome to the File Manager, ${process.argv[2].slice(11)}!`;
const finish = `Thank you for using File Manager, ${username}, goodbye!\n`;

console.log(start);
dir(workingFolder);

process.stdin.setEncoding("utf-8");

process.stdin.on("data", (data) => {
  if (data.toString("utf8").trim() === ".exit") process.exit();
  else {
    const text = data.toString().trim().split(" ");
    const operation = text[0];
    const first = text[1];
    const second = text[2];

    if (operation === "up") {
      up();
    } else if (operation === "cd" && first) {
      cd(first);
    } else if (operation === "ls") {
      ls();
    } else if (operation === "cat" && first) {
      cat(first);
    } else if (operation === "add" && first) {
      add(first);
    } else if (operation === "rn" && first && second) {
      rn(first, second);
    } else if (operation === "cp" && first && second) {
      cp(first, second);
    } else if (operation === "mv" && first && second) {
      mv(first, second);
    } else if (operation === "rm" && first) {
      rm(first);
    } else if (operation === "os" && first) {
      os(first.replace("--", ""));
    } else if (operation === "hash" && first) {
      hash(first);
    } else if (operation === "compress" && first && second) {
      compress(first, second);
    } else if (operation === "decompress" && first && second) {
      decompress(first, second);
    } else input(data.toString().trim());
  }
});

["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) =>
  process.on(signal, () => process.exit())
);

process.on("exit", () => process.stdout.write(finish));

//console.log(dir);
//ls(workingFolder);
const test = `C:\\Users\\sycho\\RS`;
//hash(`zoo.txt`);
//cp(`C:\\Users\\sycho\\RS\\zoo.txt`, `C:\\Users\\sycho\\RS\\temp`);
//mv(`C:\\Users\\sycho\\RS\\zoo.txt`, `C:\\Users\\sycho\\RS\\temp`);
//rm(`RS/zoo.txt`);
//cp path_to_file path_to_new_directory
//rn(`C:\\Users\\sycho\\RS\\zoo.txt`, `myzoo.txt`);
//add(`C:\\Users\\sycho\\RS\\test.txt`);
//up();
//cd(`C:\\Users\\sycho\\RS\\temp`);
//ls(cd(test));
//cat(`zoo.txt`);
//npm run start -- --username=your_username
//os("cpus");
//decompress(`C:\\Users\\sycho\\RS\\temp\\zoo.txt.br`, `RS/temp`);
//Invalid input
//Operation failed

/*
stdout.write(
  "Enter some text: (Enter 'exit' or press 'ctrl + c' to end task)\n"
);

stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") exit();
  writableStream.write(data);
});

process.on("SIGINT", () => exit());
process.on("exit", () => stdout.write("Good bye, my friend!"));
*/
