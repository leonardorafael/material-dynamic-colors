const clean = require("./clean.js");
const minify = require('minify');
const process = require('process');
const fs = require("fs-extra");

(async () => {
  await fs.mkdir('./dist');
  process.chdir("./src");
  const data = await minify('./material-dynamic-colors.js')
  fs.writeFile('../dist/material-dynamic-colors.min.js', data);
})();