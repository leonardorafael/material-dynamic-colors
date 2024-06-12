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
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.2/dist/cdn/material-dynamic-colors.min.js"></script>
```

```js
// with javascript
import "https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.2/dist/cdn/material-dynamic-colors.min.js";
```

### NPM

```bash
# installing
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

### JS

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

#### Returned object
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
      surfaceContainerHigh: string,
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
      surfaceContainerHigh: string,
      surfaceContainerHighest: string
      }
}
```

### CLI

Do not forget to put your color source between quotes:
```bash
material-dynamic-colors "#FF0000"
```
#### Output

```text

Generating colors from #FF0000

light theme:
        --primary: #C00100;
        --on-primary: #FFFFFF;
        --primary-container: #FFDAD4;
        --on-primary-container: #410000;
        --secondary: #775651;
        --on-secondary: #FFFFFF;
        --secondary-container: #FFDAD4;
        --on-secondary-container: #2C1512;
        --tertiary: #705C2E;
        --on-tertiary: #FFFFFF;
        --tertiary-container: #FBDFA6;
        --on-tertiary-container: #251A00;
        --error: #BA1A1A;
        --on-error: #FFFFFF;
        --error-container: #FFDAD6;
        --on-error-container: #410002;
        --background: #FFFBFF;
        --on-background: #201A19;
        --surface: #FFF8F6;
        --on-surface: #201A19;
        --surface-variant: #F5DDDA;
        --on-surface-variant: #534341;
        --outline: #857370;
        --outline-variant: #D8C2BE;
        --shadow: #000000;
        --scrim: #000000;
        --inverse-surface: #362F2E;
        --inverse-on-surface: #FBEEEC;
        --inverse-primary: #FFB4A8;
        --surface-dim: #E4D7D5;
        --surface-bright: #FFF8F6;
        --surface-container-lowest: #FFFFFF;
        --surface-container-low: #FEF1EE;
        --surface-container: #F8EBE9;
        --surface-container-high: #F3E5E3;
        --surface-container-highest: #EDE0DD;

dark theme:
        --primary: #FFB4A8;
        --on-primary: #690100;
        --primary-container: #930100;
        --on-primary-container: #FFDAD4;
        --secondary: #E7BDB6;
        --on-secondary: #442925;
        --secondary-container: #5D3F3B;
        --on-secondary-container: #FFDAD4;
        --tertiary: #DEC48C;
        --on-tertiary: #3E2E04;
        --tertiary-container: #564419;
        --on-tertiary-container: #FBDFA6;
        --error: #FFB4AB;
        --on-error: #690005;
        --error-container: #93000A;
        --on-error-container: #FFB4AB;
        --background: #201A19;
        --on-background: #EDE0DD;
        --surface: #181211;
        --on-surface: #EDE0DD;
        --surface-variant: #534341;
        --on-surface-variant: #D8C2BE;
        --outline: #A08C89;
        --outline-variant: #534341;
        --shadow: #000000;
        --scrim: #000000;
        --inverse-surface: #EDE0DD;
        --inverse-on-surface: #362F2E;
        --inverse-primary: #C00100;
        --surface-dim: #181211;
        --surface-bright: #3F3736;
        --surface-container-lowest: #120D0C;
        --surface-container-low: #201A19;
        --surface-container: #251E1D;
        --surface-container-high: #2F2827;
        --surface-container-highest: #3B3332;
```

## License

[MIT](https://opensource.org/licenses/MIT)

## Thank you!
[![Stargazers repo roster for @leonardorafael/material-dynamic-colors](https://reporoster.com/stars/notext/leonardorafael/material-dynamic-colors)](https://github.com/leonardorafael/material-dynamic-colors/stargazers)
