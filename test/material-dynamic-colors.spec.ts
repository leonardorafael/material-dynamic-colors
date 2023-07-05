import { it, expect } from "vitest";
import materialDynamicColors from "../src/cdn/material-dynamic-colors";

it("getting theme from color", async () => {
  const json = await materialDynamicColors("#ffd700");
});

it("getting theme from url", async () => {
  const json = await materialDynamicColors("https://www.beercss.com/favicon.png");
  expect(json?.light.primary).toBe("#d6c953");
});

it("getting theme from blob", async () => {
  const blob = await fetch("https://www.beercss.com/favicon.png").then(response => response.blob());
  const json = await materialDynamicColors(blob);
  expect(json?.light.primary).toBe("#d6c953");
});