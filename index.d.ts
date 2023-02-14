interface IMode {  
  primary: string,
  onPrimary: string,
  primaryContainer: string,
  onPrimaryContainer: string,
  secondary: string,
  onSecondary: string,
  secondaryContainer: string,
  onSecondaryContainer: string,
  tertiary: string,
  onTertiary: string,
  tertiaryContainer: string,
  onTertiaryContainer: string,
  error: string,
  errorContainer: string,
  onError: string,
  onErrorContainer: string,
  background: string,
  onBackground: string,
  surface: string,
  onSurface: string,
  surfaceVariant: string,
  onSurfaceVariant: string,
  outline: string,
  inverseOnSurface: string,
  inverseSurface: string,
  inversePrimary: string,
  shadow: string
}

interface ITheme {
  light: IMode,
  dark: IMode
}

declare module "material-dynamic-colors";
declare function materialDynamicColors(from: string | File | Blob | Event): Promise<ITheme>;