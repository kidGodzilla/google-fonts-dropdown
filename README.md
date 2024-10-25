# Google Fonts Dropdown

A Google fonts dropdown selector that doesn't require any dependencies or API keys. 

Relies on pre-rendered images to display fonts for performance.

## Scripts

All Relevant Google Fonts: `lib/google-font-preview-dropdown.min.js` (11k gzipped)

Top 300 Google Fonts by popularity: `lib/google-font-preview-dropdown.300.min.js` (3k gzipped)
## Usage

After including the relevant js file, initialize your element with:

```js
new FontPreviewDropdown('#font-selector', function(fontName, fontCssUrl, imagePath) {
    console.log(`Selected font: ${fontName}`);
    console.log(`CSS URL: ${fontCssUrl}`);
    console.log(`Image path: ${imagePath}`);
    var cssStyles = `@import url('${fontCssUrl}');\nbody { font-family: '${fontName}', sans-serif; }`;
    console.log(`CSS Styles: ${imagePath}`);
}, '../images/', 200);
```

## File size and performance

Images are lazy loaded.

Script is ~24k, 22k minified, 11k gzipped (images additional and lazy loaded).

You can reduce this dramatically by reducing the number of items in the array of fonts to be loaded.

google-font-preview-dropdown.300.min.js is about 3k minified and gzipped.

