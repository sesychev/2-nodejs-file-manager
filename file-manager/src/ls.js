import { operation, input } from "./errors.js";
import fs from "fs";
import path from "path";

const ls = (testFolder) => {
  fs.promises
    .readdir(testFolder, { withFileTypes: true }, (e) => {
      if (e) operation;
    })
    .then((files) => {
      let res = files.map(callback).sort(sortTypeName);

      console.table(res);
    });

  let callback = (file) => {
    const cur = {
      Name: path.parse(file.name).name,
    };
    cur.Type = file.isDirectory() ? "directory" : "file";

    return cur;
  };

  let sortTypeName = (a, b) =>
    a.Type.localeCompare(b.Type) || a.Name.localeCompare(b.Name);
};

export default ls;
