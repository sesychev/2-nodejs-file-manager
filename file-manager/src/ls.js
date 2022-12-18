import { operation, input, dir } from "./errors.js";
import fs from "fs";
import process from "process";
import path from "path";
import { homedir } from "os";

const ls = async () => {
  const workingFolderPath = homedir();
  const testFolder =
    workingFolderPath === process.cwd() ? workingFolderPath : process.cwd();

  await fs.promises.access(testFolder);
  fs.promises
    .readdir(testFolder, { withFileTypes: true }, (e) => {
      if (e) operation(e);
    })
    .then((files) => {
      let res = files.map(callback).sort(sortTypeName);

      console.table(res);
    });

  let callback = (file) => {
    const cur = file.isFile()
      ? {
          Name: path.parse(file.name).name,
        }
      : {
          Name: file.name,
        };

    cur.Type = file.isDirectory() ? "directory" : "file";

    return cur;
  };

  let sortTypeName = (a, b) =>
    a.Type.localeCompare(b.Type) || a.Name.localeCompare(b.Name);

  dir(testFolder);
};

export default ls;
