import ls from "./file-manager/src/ls.js";

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
const finish = `Thank you for using File Manager, ${username}, goodbye!`;
const dir = `You are currently in ${currentFolder}`;
//C:\Users\sycho
console.log(start);
console.log(finish);
console.log(dir);
console.log(workingFolder);

ls(workingFolder);
//npm run start -- --username=your_username
//Invalid input
//Operation failed
