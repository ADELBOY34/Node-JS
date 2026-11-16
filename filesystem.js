const fs = require("node:fs");
const path = require("node:path");

const welcomePath = path.join(__dirname, "welcome.txt");
fs.writeFileSync(welcomePath, "Hello Node\n", "utf8");
console.log(`Created ${path.basename(welcomePath)}`);

// The exercise asks to read hello.txt; keep it alongside welcome.txt.
const helloPath = path.join(__dirname, "hello.txt");
fs.readFile(helloPath, "utf8", (error, data) => {
  if (error) {
    console.error("Could not read hello.txt:", error.message);
    process.exitCode = 1;
    return;
  }
  console.log(data.trimEnd());
});
