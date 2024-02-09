import { readdir } from "fs";

const ls = async () => {
  try {
    const pth = process.cwd();

    readdir(pth, { withFileTypes: true }, (e, items) => {
      if (e) console.log(e.message);
      let files = [];
      let folders = [];

      items.map((dirent) => {
        if (dirent.isDirectory())
          folders.push({ Name: dirent.name, Type: "folder" });
        if (dirent.isFile) files.push({ Name: dirent.name, Type: "file" });
      });

      console.table([...folders, ...files]);
      console.log(`You are currently in ${pth}`);
    });
  } catch (e) {
    console.log("Operation failed: " + e.message);
  }
};

export default ls;
