<p align="center">
    <a href="https://github.com/leonardorafael/material-dynamic-colors/blob/main/LICENSE"><img src="https://img.shields.io/github/license/leonardorafael/material-dynamic-colors" alt="License"></a>
    <a href="https://bundlephobia.com/package/material-dynamic-colors"><img src="https://badgen.net/bundlephobia/minzip/material-dynamic-colors" alt="Size"></a>
    <a href="https://www.npmjs.com/package/material-dynamic-colors"><img src="https://img.shields.io/npm/v/material-dynamic-colors" alt="Version"></a>
    <a href="https://github.com/leonardorafael/material-dynamic-colors/pulls"><img src="https://img.shields.io/github/issues-pr/leonardorafael/material-dynamic-colors" alt="Pull Request"></a>
    <a href="https://github.com/leonardorafael/material-dynamic-colors/issues"><img src="https://img.shields.io/github/issues/leonardorafael/material-dynamic-colors" alt="Issues"></a>
</p>

# Material Dynamic Colors

This project is a port of https://material-foundation.github.io/material-theme-builder

## Getting Started

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.0.4/dist/material-dynamic-colors.min.js" type="text/javascript"></script>
```

### NPM

```js
// installing
npm i material-dynamic-colors
```

```js
// importing
import "material-dynamic-colors";
```

## How to use it?
```js
let colors = await materialDynamicColors(source);

// from color
let colors = await materialDynamicColors("#ffd700");

// from file
let fromFile = document.query("input[type='file']").files[0];
let colors = await materialDynamicColors(file);

// from blob
let fromBlob = new Blob();
let colors = await materialDynamicColors(blob);
```

## License

[MIT](https://opensource.org/licenses/MIT)

## Hello!
[![Stargazers repo roster for @leonardorafael/material-dynamic-colors](https://reporoster.com/stars/notext/leonardorafael/material-dynamic-colors)](https://github.com/leonardorafael/material-dynamic-colors/stargazers)
