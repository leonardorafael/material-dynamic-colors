import { it, expect } from "vitest";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const cli = fileURLToPath(new URL("../cli.js", import.meta.url));

it("cli generates css from a color", async () => {
  const { stdout } = await run(process.execPath, [cli, "#FF0000", "css"]);
  expect(stdout).toContain("--primary: #C00100;");
});

it("cli generates css from key colors json", async () => {
  const { stdout } = await run(process.execPath, [cli, '{"primary": "#ff0000", "secondary": "#00ff00"}', "css"]);
  expect(stdout).toContain("--primary: #C00100;");
  expect(stdout).toContain("--secondary: #026E00;");
});

it("cli exits 1 on malformed json", async () => {
  await expect(run(process.execPath, [cli, '{"primary":', "css"])).rejects.toMatchObject({ code: 1 });
});

it("cli exits 1 on invalid key colors", async () => {
  await expect(run(process.execPath, [cli, '{"primary": "notahex"}'])).rejects.toMatchObject({ code: 1 });
  await expect(run(process.execPath, [cli, '{"secondary": "#00ff00"}'])).rejects.toMatchObject({ code: 1 });
});
