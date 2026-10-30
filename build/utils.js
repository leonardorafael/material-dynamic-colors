import fs from "fs-extra";

export function copy(input, output) {
  fs.copySync(input, output);
}

export function readDir(dir) {
  return fs.readdirSync(dir);
}

export function readFile(file) {
  return fs.readFileSync(file, "utf-8");
}

export function saveFile(file, content) {
  fs.ensureFileSync(file);
  fs.writeFileSync(file, content);
}
