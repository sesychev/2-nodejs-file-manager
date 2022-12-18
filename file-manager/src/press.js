import { operation, input, dir } from "./errors.js";
import fs from "fs";
import path from "path";
import { homedir } from "os";
import process from "process";
import zlib from "zlib";

const compress = async (oldName, newName) => {
  const workingFolderPath = homedir();
  const relativePath = path.join(process.cwd(), oldName);
  const absolutePath = path.resolve(oldName);

  const readPath = path.isAbsolute(oldName) ? absolutePath : relativePath;

  const newPath = path.isAbsolute(newName)
    ? newName
    : path.join(process.cwd(), newName);

  const READ_FILE_NAME = path.parse(readPath).base;
  const WRITE_FILE_NAME = path.join(newPath, READ_FILE_NAME + ".br");
  //compress path_to_file path_to_destination
  try {
    await fs.promises.access(readPath);

    // Create read and write streams
    const readStream = fs.createReadStream(readPath);
    const writeStream = fs.createWriteStream(WRITE_FILE_NAME);

    // Create brotli compress object
    const brotli = zlib.createBrotliCompress();

    // Pipe the read and write operations with brotli compression
    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on("finish", () => console.log("Done compressing"));

    dir(path.resolve(newPath));
  } catch (e) {
    operation(e);
  }
};

const decompress = async (oldName, newName) => {
  const workingFolderPath = homedir();
  const relativePath = path.join(workingFolderPath, oldName);
  const workingFolderName = path.parse(workingFolderPath).name;
  const absolutePath = path.resolve(oldName);

  const readPath = oldName.includes(workingFolderName)
    ? absolutePath
    : relativePath;

  const newPath = newName.includes(workingFolderName)
    ? newName
    : path.join(workingFolderPath, newName);

  const READ_FILE_NAME = path.parse(readPath).name;
  console.log(path.parse(readPath).name);
  const WRITE_FILE_NAME = path.join(newPath, READ_FILE_NAME);
  console.log(WRITE_FILE_NAME);

  //compress path_to_file path_to_destination
  try {
    await fs.promises.access(readPath);

    // Create read and write streams
    const readStream = fs.createReadStream(readPath);
    const writeStream = fs.createWriteStream(WRITE_FILE_NAME);

    // Create brotli compress object
    const brotli = zlib.createBrotliDecompress();

    // Pipe the read and write operations with brotli compression
    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on("finish", () => console.log("Done decompressing"));

    dir(path.resolve(newPath));
  } catch (e) {
    operation(e);
  }
};

export { compress, decompress };
