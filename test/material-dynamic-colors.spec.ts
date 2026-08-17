import { it, expect } from "vitest";
import materialDynamicColors from "../src/cdn/material-dynamic-colors";
import { themeFromSourceColor, themeFromImage, argbFromHex, hexFromArgb, Theme, CorePalette, Scheme, Hct } from "@material/material-color-utilities";

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

const keyColors = {
  primary: "#0000ff",
  secondary: "#00ff00",
  tertiary: "#ff00ff",
  neutral: "#d1d1d6",
  neutralVariant: "#d1d1d6",
  error: "#ff0000"
};

const keyColorsAsArgb = {
  primary: argbFromHex(keyColors.primary),
  secondary: argbFromHex(keyColors.secondary),
  tertiary: argbFromHex(keyColors.tertiary),
  neutral: argbFromHex(keyColors.neutral),
  neutralVariant: argbFromHex(keyColors.neutralVariant),
  error: argbFromHex(keyColors.error)
};

const surfaceOverrides = [
  "surfaceDim", "surface", "surfaceBright", "surfaceContainerLowest", "surfaceContainerLow",
  "surfaceContainer", "surfaceContainerHigh", "surfaceContainerHighest",
  "onSurface", "onSurfaceVariant", "outline", "outlineVariant"
];

it("getting theme from key colors with only primary matches theme from color", async () => {
  const fromColor = await materialDynamicColors("#ffd700");
  const fromKeyColors = await materialDynamicColors({ primary: "#ffd700" });
  expect(fromKeyColors).toEqual(fromColor);
});

it("getting theme from all key colors matches core palette derivation", async () => {
  const json = await materialDynamicColors(keyColors);
  const palette = CorePalette.fromColors(keyColorsAsArgb);
  const schemes = {
    light: Scheme.lightFromCorePalette(palette).toJSON(),
    dark: Scheme.darkFromCorePalette(palette).toJSON()
  };

  for (const [name, scheme] of Object.entries(schemes))
    for (const [role, argb] of Object.entries(scheme))
      if (!surfaceOverrides.includes(role))
        expect(json[name][role], `${name}.${role}`).toBe(hexFromArgb(argb));
});

it("custom neutral key colors flow into surface container colors", async () => {
  const json = await materialDynamicColors(keyColors);
  const palette = CorePalette.fromColors(keyColorsAsArgb);

  expect(json.dark.surface).toBe(hexFromArgb(palette.n1.tone(6)));
  expect(json.dark.surfaceContainerHighest).toBe(hexFromArgb(palette.n1.tone(22)));
  expect(json.dark.outline).toBe(hexFromArgb(palette.n2.tone(60)));
  expect(json.light.surface).toBe(hexFromArgb(palette.n1.tone(98)));
  expect(json.light.surfaceContainer).toBe(hexFromArgb(palette.n1.tone(94)));
  expect(json.light.outlineVariant).toBe(hexFromArgb(palette.n2.tone(80)));
});

it("only provided key colors are overridden", async () => {
  const base = await materialDynamicColors("#0000ff");
  const json = await materialDynamicColors({ primary: "#0000ff", secondary: "#00ff00" });
  const secondaryPalette = CorePalette.of(argbFromHex("#00ff00")).a1;

  expect(json.light.secondary).toBe(hexFromArgb(secondaryPalette.tone(40)));
  expect(json.light.secondaryContainer).toBe(hexFromArgb(secondaryPalette.tone(90)));
  expect(json.dark.secondary).toBe(hexFromArgb(secondaryPalette.tone(80)));
  expect(json.light.secondary).not.toBe(base.light.secondary);

  expect(json.light.primary).toBe(base.light.primary);
  expect(json.light.tertiary).toBe(base.light.tertiary);
  expect(json.light.error).toBe(base.light.error);
  expect(json.light.surface).toBe(base.light.surface);
  expect(json.dark.tertiary).toBe(base.dark.tertiary);
  expect(json.dark.outline).toBe(base.dark.outline);
});

it("key colors keep material tones and hues", async () => {
  const json = await materialDynamicColors(keyColors);
  const tone = (hex: string) => Hct.fromInt(argbFromHex(hex)).tone;
  const hue = (hex: string) => Hct.fromInt(argbFromHex(hex)).hue;

  for (const role of ["primary", "secondary", "tertiary", "error"]) {
    const onRole = "on" + role[0].toUpperCase() + role.slice(1);
    expect(tone(json.light[role]), `light.${role} tone`).toBeCloseTo(40, 0);
    expect(tone(json.dark[role]), `dark.${role} tone`).toBeCloseTo(80, 0);
    expect(Math.abs(tone(json.light[onRole]) - tone(json.light[role]))).toBeGreaterThanOrEqual(40);
    expect(Math.abs(tone(json.dark[onRole]) - tone(json.dark[role]))).toBeGreaterThanOrEqual(40);
  }

  const hueDiff = (a: number, b: number) => {
    const d = Math.abs(a - b) % 360;
    return Math.min(d, 360 - d);
  };

  for (const role of ["secondary", "tertiary", "error"]) {
    const keyHue = Hct.fromInt(argbFromHex(keyColors[role])).hue;
    expect(hueDiff(hue(json.light[role]), keyHue), `light.${role} hue`).toBeLessThan(3);
    expect(hueDiff(hue(json.dark[role]), keyHue), `dark.${role} hue`).toBeLessThan(3);
  }
});

it("key colors theme returns every color role as hex", async () => {
  const base = await materialDynamicColors("#ffd700");
  const json = await materialDynamicColors(keyColors);

  for (const name of ["light", "dark"]) {
    expect(Object.keys(json[name]).sort()).toEqual(Object.keys(base[name]).sort());
    expect(Object.keys(json[name])).toHaveLength(36);
    for (const [role, hex] of Object.entries(json[name]))
      expect(hex, `${name}.${role}`).toMatch(/^#[0-9a-f]{6}$/i);
  }
});

it("key colors accept short hex", async () => {
  const fromShort = await materialDynamicColors({ primary: "#fd0", secondary: "#0f0" });
  const fromLong = await materialDynamicColors({ primary: "#ffdd00", secondary: "#00ff00" });
  expect(fromShort).toEqual(fromLong);
});

it("null key colors are treated as omitted", async () => {
  const withNulls = await materialDynamicColors({ primary: "#ffd700", secondary: null, tertiary: null } as any);
  const primaryOnly = await materialDynamicColors({ primary: "#ffd700" });
  expect(withNulls).toEqual(primaryOnly);
});

it("getting empty theme from invalid key colors", async () => {
  const invalidInputs = [
    {},
    { primary: "notahex" },
    { primary: "#ffff" },
    { primary: "#ff0000ff" },
    { primary: "#00ff00", secondary: "12345" },
    { primary: "#00ff00", secondary: 123 },
    { primary: "#00ff00", tertiary: "#ggg" },
    { secondary: "#00ff00" }
  ];

  for (const input of invalidInputs) {
    const json = await materialDynamicColors(input as any);
    expect(json.light.primary, JSON.stringify(input)).toBeUndefined();
    expect(json.dark.primary, JSON.stringify(input)).toBeUndefined();
  }
});
