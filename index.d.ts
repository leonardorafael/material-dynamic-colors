import { IMaterialDynamicColorsTheme, IMaterialDynamicColorsKeyColors } from "./src/cdn/interfaces"

declare global {
  function materialDynamicColors(from: string | File | Blob | Event | HTMLImageElement | IMaterialDynamicColorsKeyColors): Promise<IMaterialDynamicColorsTheme>;
}

declare module "material-dynamic-colors";
export default materialDynamicColors;