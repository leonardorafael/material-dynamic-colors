import { IMaterialDynamicColorsTheme } from "./src/cdn/interfaces"

declare global {
  function materialDynamicColors(from: string | File | Blob | Event | HTMLImageElement | Array<string>): Promise<IMaterialDynamicColorsTheme>;
}

declare module "material-dynamic-colors";
export default materialDynamicColors;