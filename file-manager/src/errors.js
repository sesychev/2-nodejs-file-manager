const operation = (err) => console.log("Operation failed: " + err);
const input = (err) => console.log("Invalid input: " + err);
const dir = (currentFolder) =>
  console.log(`You are currently in ${currentFolder}`);

export { operation, input, dir };
