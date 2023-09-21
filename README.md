<p align="center">
    <a href="https://github.com/leonardorafael/material-dynamic-colors/blob/main/LICENSE"><img src="https://img.shields.io/github/license/leonardorafael/material-dynamic-colors" alt="License"></a>
    <a href="https://img.badgesize.io/leonardorafael/material-dynamic-colors/main/dist/cdn/material-dynamic-colors.min.js?compression=brotli"><img src="https://img.badgesize.io/leonardorafael/material-dynamic-colors/main/dist/cdn/material-dynamic-colors.min.js?compression=brotli" alt="Size"></a>
    <a href="https://www.npmjs.com/package/material-dynamic-colors"><img src="https://img.shields.io/npm/v/material-dynamic-colors" alt="Version"></a>
    <a href="https://github.com/leonardorafael/material-dynamic-colors/pulls"><img src="https://img.shields.io/github/issues-pr/leonardorafael/material-dynamic-colors" alt="Pull Request"></a>
    <a href="https://github.com/leonardorafael/material-dynamic-colors/issues"><img src="https://img.shields.io/github/issues/leonardorafael/material-dynamic-colors" alt="Issues"></a>
</p>

# Material Dynamic Colors

This project is based on https://material-foundation.github.io/material-theme-builder

## Getting Started

### CDN

```html
// with html
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.0.3/dist/cdn/material-dynamic-colors.min.js"></script>
```

```js
// with javascript
import "https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.0.3/dist/cdn/material-dynamic-colors.min.js";
```

### NPM

```js
// installing
npm i material-dynamic-colors
```

```js
// importing as window.materialDynamicColors
import "material-dynamic-colors";
```

```js
// importing as materialDynamicColors
import materialDynamicColors from "material-dynamic-colors";
```

## How to use it?
```js
let colors = await materialDynamicColors(source);

// from color
let colors = await materialDynamicColors("#ffd700");

// from path
let colors = await materialDynamicColors("/image.png");

// from url (caution with cors errors)
let colors = await materialDynamicColors("http://domain.com/image.png");

// from file
let fromFile = document.query("input[type='file']").files[0];
let colors = await materialDynamicColors(file);

// from blob
let fromBlob = new Blob();
let colors = await materialDynamicColors(blob);
```

## Returned object
```js
{
   light:{
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
      onError: string,
      errorContainer: string,
      onErrorContainer: string,
      background: string,
      onBackground: string,
      surface: string,
      onSurface: string,
      surfaceVariant: string,
      onSurfaceVariant: string,
      outline: string,
      outlineVariant: string,
      shadow: string,
      scrim: string,
      inverseSurface: string,
      inverseOnSurface: string,
      inversePrimary: string,
      surfaceDim: string,
      surfaceBright: string,
      surfaceContainerLowest: string,
      surfaceContainerLow: string,
      surfaceContainer: string,
      surfaceContainerHight: string,
      surfaceContainerHighest: string
      },
   dark:{
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
      onError: string,
      errorContainer: string,
      onErrorContainer: string,
      background: string,
      onBackground: string,
      surface: string,
      onSurface: string,
      surfaceVariant: string,
      onSurfaceVariant: string,
      outline: string,
      outlineVariant: string,
      shadow: string,
      scrim: string,
      inverseSurface: string,
      inverseOnSurface: string,
      inversePrimary: string,
      surfaceDim: string,
      surfaceBright: string,
      surfaceContainerLowest: string,
      surfaceContainerLow: string,
      surfaceContainer: string,
      surfaceContainerHight: string,
      surfaceContainerHighest: string
      }
}
```



## License

[MIT](https://opensource.org/licenses/MIT)

## Thank you!
[![Stargazers repo roster for @leonardorafael/material-dynamic-colors](https://reporoster.com/stars/notext/leonardorafael/material-dynamic-colors)](https://github.com/leonardorafael/material-dynamic-colors/stargazers)
