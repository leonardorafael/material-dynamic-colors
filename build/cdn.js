import { minify } from "terser";
import fs from "fs";

(async() => {
  let options = { 
    compress: {
      drop_console: true
    }
  };
  
  let output = fs.readFileSync("src/material-dynamic-colors.js", "utf-8");
  let minified = (await minify(output, options)).code;
  fs.writeFileSync("dist/cdn/material-dynamic-colors.min.js", minified);
  fs.writeFileSync("dist/cdn/material-dynamic-colors.js", "export default " + output);
})();
