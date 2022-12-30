import { minify } from "terser";
import fs from "fs";

(async() => {
  let options = { 
    compress: {
      drop_console: true
    }
  };
  
  let output = await minify(fs.readFileSync("src/material-dynamic-colors.js", "utf-8"), options);
  fs.writeFileSync("dist/cdn/material-dynamic-colors.min.js", output.code, ()=>{});
  fs.writeFileSync("dist/cdn/material-dynamic-colors.js", "export default " + output.code, ()=>{});
})();
