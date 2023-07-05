import { IMaterialDynamicColorsTheme } from "./interfaces";
import { themeFromSourceColor, themeFromImage, argbFromHex, hexFromArgb, Theme } from "@material/material-color-utilities";

function themeToJson(theme: Theme) {
  let json = JSON.parse(JSON.stringify(theme.schemes));

  for(let i in json)
    for (let j in json[i])
      json[i][j] = hexFromArgb(json[i][j]);

  return json;
}

async function materialDynamicColors (from: string | File | Blob | Event | HTMLImageElement): Promise<IMaterialDynamicColorsTheme | undefined> {
  const to:any = from;

  if (typeof to === "string" && /^\#[0-9a-f]+$/i.test(to)) {
    let theme = themeFromSourceColor(argbFromHex(to));
    return themeToJson(theme);
  }

  if (to.src) {
    let theme = await themeFromImage(to);
    return themeToJson(theme);
  }

  let blob = new Blob();
  if (typeof to === "string") blob = await fetch(to).then(response => response.blob());
  if (to.size) blob = to;
  if (to.files && to.files[0]) blob = to.files[0];
  if (to.target && to.target.files && to.target.files[0]) blob = to.target.files[0];
  if (!blob.size) return;

  let image = new Image(64);
  image.src = URL.createObjectURL(blob);
  
  let theme = await themeFromImage(image);
  return themeToJson(theme);
}

(globalThis as any).materialDynamicColors = materialDynamicColors;
export default materialDynamicColors;