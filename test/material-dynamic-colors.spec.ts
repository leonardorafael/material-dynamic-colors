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

it("adding surface container colors", async () => {
  const json = await materialDynamicColors("#ffd700");
  expect(json.dark.surfaceDim).not.toBeUndefined();
  expect(json.dark.surfaceBright).not.toBeUndefined();
  expect(json.dark.surfaceContainerLowest).not.toBeUndefined();
  expect(json.dark.surfaceContainerLow).not.toBeUndefined();
  expect(json.dark.surfaceContainer).not.toBeUndefined();
  expect(json.dark.surfaceContainerHigh).not.toBeUndefined();
  expect(json.dark.surfaceContainerHighest).not.toBeUndefined();
  expect(json.light.surfaceDim).not.toBeUndefined();
  expect(json.light.surfaceBright).not.toBeUndefined();
  expect(json.light.surfaceContainerLowest).not.toBeUndefined();
  expect(json.light.surfaceContainerLow).not.toBeUndefined();
  expect(json.light.surfaceContainer).not.toBeUndefined();
  expect(json.light.surfaceContainerHigh).not.toBeUndefined();
  expect(json.light.surfaceContainerHighest).not.toBeUndefined();
});
