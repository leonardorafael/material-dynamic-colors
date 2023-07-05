import { it, expect } from "vitest";
import materialDynamicColors from "../src/cdn/material-dynamic-colors";

it("getting theme from color", async () => {
  const json = await materialDynamicColors("#ffd700");
  expect(json.light.primary).not.toBeUndefined();
  expect(json.dark.primary).not.toBeUndefined();
});

it("getting empty theme from invalid", async () => {
  const json = await materialDynamicColors("invalid");
  expect(json.light.primary).toBeUndefined();
  expect(json.dark.primary).toBeUndefined();
});
