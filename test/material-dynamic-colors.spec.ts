import { it, expect } from "vitest";
import materialDynamicColors from "../src/cdn/material-dynamic-colors";
import { themeFromSourceColor, themeFromImage, argbFromHex, hexFromArgb, Theme } from "@material/material-color-utilities";

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
  const theme = themeFromSourceColor(argbFromHex("#ffd700"));
  const json = await materialDynamicColors("#ffd700");

  expect(json.dark.surfaceDim).toBe(hexFromArgb(theme.palettes.neutral.tone(6)));
  expect(json.dark.surface).toBe(hexFromArgb(theme.palettes.neutral.tone(6)));
  expect(json.dark.surfaceBright).toBe(hexFromArgb(theme.palettes.neutral.tone(24)));
  expect(json.dark.surfaceContainerLowest).toBe(hexFromArgb(theme.palettes.neutral.tone(4)));
  expect(json.dark.surfaceContainerLow).toBe(hexFromArgb(theme.palettes.neutral.tone(10)));
  expect(json.dark.surfaceContainer).toBe(hexFromArgb(theme.palettes.neutral.tone(12)));
  expect(json.dark.surfaceContainerHigh).toBe(hexFromArgb(theme.palettes.neutral.tone(17)));
  expect(json.dark.surfaceContainerHighest).toBe(hexFromArgb(theme.palettes.neutral.tone(22)));
  expect(json.dark.onSurface).toBe(hexFromArgb(theme.palettes.neutral.tone(90)));
  expect(json.dark.onSurfaceVariant).toBe(hexFromArgb(theme.palettes.neutralVariant.tone(80)));
  expect(json.dark.outline).toBe(hexFromArgb(theme.palettes.neutralVariant.tone(60)));
  expect(json.dark.outlineVariant).toBe(hexFromArgb(theme.palettes.neutralVariant.tone(30)));

  expect(json.light.surfaceDim).toBe(hexFromArgb(theme.palettes.neutral.tone(87)));
  expect(json.light.surface).toBe(hexFromArgb(theme.palettes.neutral.tone(98)));
  expect(json.light.surfaceBright).toBe(hexFromArgb(theme.palettes.neutral.tone(98)));
  expect(json.light.surfaceContainerLowest).toBe(hexFromArgb(theme.palettes.neutral.tone(100)));
  expect(json.light.surfaceContainerLow).toBe(hexFromArgb(theme.palettes.neutral.tone(96)));
  expect(json.light.surfaceContainer).toBe(hexFromArgb(theme.palettes.neutral.tone(94)));
  expect(json.light.surfaceContainerHigh).toBe(hexFromArgb(theme.palettes.neutral.tone(92)));
  expect(json.light.surfaceContainerHighest).toBe(hexFromArgb(theme.palettes.neutral.tone(90)));
  expect(json.light.onSurface).toBe(hexFromArgb(theme.palettes.neutral.tone(10)));
  expect(json.light.onSurfaceVariant).toBe(hexFromArgb(theme.palettes.neutralVariant.tone(30)));
  expect(json.light.outline).toBe(hexFromArgb(theme.palettes.neutralVariant.tone(50)));
  expect(json.light.outlineVariant).toBe(hexFromArgb(theme.palettes.neutralVariant.tone(80)));
});
