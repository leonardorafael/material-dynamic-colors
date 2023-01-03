<p align="center">
    <a href="https://github.com/leonardorafael/material-dynamic-colors/blob/main/LICENSE"><img src="https://img.shields.io/github/license/leonardorafael/material-dynamic-colors" alt="License"></a>
    <a href="https://www.npmjs.com/package/material-dynamic-colors"><img src="https://img.shields.io/npm/v/material-dynamic-colors" alt="Version"></a>
    <a href="https://github.com/leonardorafael/material-dynamic-colors/pulls"><img src="https://img.shields.io/github/issues-pr/leonardorafael/material-dynamic-colors" alt="Pull Request"></a>
    <a href="https://github.com/leonardorafael/material-dynamic-colors/issues"><img src="https://img.shields.io/github/issues/leonardorafael/material-dynamic-colors" alt="Issues"></a>
</p>

# Material Dynamic Colors

This project is based on https://material-foundation.github.io/material-theme-builder

## Getting Started

### CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.1.3/dist/cdn/material-dynamic-colors.min.js" type="text/javascript"></script>
```

### NPM

```js
// installing
npm i material-dynamic-colors
```

```js
// importing as window.materialDynamicColors
import "material-dynamic-colors";

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
      primary:"#715d00",
      onPrimary:"#ffffff",
      primaryContainer:"#ffe15e",
      onPrimaryContainer:"#231b00",
      secondary:"#675e40",
      onSecondary:"#ffffff",
      secondaryContainer:"#efe2bb",
      onSecondaryContainer:"#211b04",
      tertiary:"#44664d",
      onTertiary:"#ffffff",
      tertiaryContainer:"#c6eccd",
      onTertiaryContainer:"#00210e",
      error:"#ba1b1b",
      errorContainer:"#ffdad4",
      onError:"#ffffff",
      onErrorContainer:"#410001",
      background:"#fffbf7",
      onBackground:"#1d1b16",
      surface:"#fffbf7",
      onSurface:"#1d1b16",
      surfaceVariant:"#eae2cf",
      onSurfaceVariant:"#4b4639",
      outline:"#7c7767",
      inverseOnSurface:"#f6f0e6",
      inverseSurface:"#32302a"
   },
   dark:{
      primary:"#eac400",
      onPrimary:"#3a3000",
      primaryContainer:"#554600",
      onPrimaryContainer:"#ffe15e",
      secondary:"#d2c6a1",
      onSecondary:"#373016",
      secondaryContainer:"#4e462a",
      onSecondaryContainer:"#efe2bb",
      tertiary:"#aad0b2",
      onTertiary:"#163722",
      tertiaryContainer:"#2c4e37",
      onTertiaryContainer:"#c6eccd",
      error:"#ffb4a9",
      errorContainer:"#930006",
      onError:"#680003",
      onErrorContainer:"#ffdad4",
      background:"#1d1b16",
      onBackground:"#e8e2d9",
      surface:"#1d1b16",
      onSurface:"#e8e2d9",
      surfaceVariant:"#4b4639",
      onSurfaceVariant:"#cec6b4",
      outline:"#969080",
      inverseOnSurface:"#1d1b16",
      inverseSurface:"#e8e2d9"
   }
}
```



## License

[MIT](https://opensource.org/licenses/MIT)

## Thank you!
[![Stargazers repo roster for @leonardorafael/material-dynamic-colors](https://reporoster.com/stars/notext/leonardorafael/material-dynamic-colors)](https://github.com/leonardorafael/material-dynamic-colors/stargazers)
