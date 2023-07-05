import { IMaterialDynamicColorsTheme } from "./src/cdn/interfaces"

declare module "material-dynamic-colors";
declare function materialDynamicColors(from: string | File | Blob | Event | HTMLImageElement): Promise<IMaterialDynamicColorsTheme>;
