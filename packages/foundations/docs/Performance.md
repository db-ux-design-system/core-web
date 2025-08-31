# Performance

If you need to improve the performance of your application, you can use the following tips:

## CSS Selector Performance

To optimize rendering performance, we've optimized expensive CSS selectors in the design system. However, for best performance, consider these approaches:

### Use Data Attributes Instead of :has() Selectors

The `:has()` selector is powerful but can be expensive for performance. We provide data attribute alternatives:

```css
/* Expensive :has() selector */
.tag:has(input:checked) { ... }

/* Performance-optimized alternative */
.tag[data-checked="true"] { ... }
```

### Available Performance-Optimized Attributes

For components that support it, you can use these data attributes for better performance:

**Tag Components:**
- `data-checked="true"` - Instead of `:has(input:checked)`
- `data-has-input="true"` - Instead of `:has(input)`
- `data-checkbox-checked="true"` - Instead of `:has(input[type="checkbox"]:checked)`
- `data-radio-checked="true"` - Instead of `:has(input[type="radio"]:checked)`
- `data-input-checked="true"` - Instead of `:has(input:checked)` for parent containers
- `data-has-dbbutton="true"` - Instead of `:has(dbbutton)`

**Form Components:**
- `data-valid="true"` / `data-invalid="true"` - Instead of complex form validation selectors

**Notification Components:**
- `data-has-timestamp="true"` - Instead of `:has(span)` for timestamp detection
- `data-has-button="true"` - Instead of `:has(.db-button)`
- `data-has-header="true"` - Instead of `:has(header)`
- `data-has-image="true"` - Instead of `:has(img)`

### Implementation

Set these attributes programmatically based on your component state:

```javascript
// Example: Update tag component state
const tagElement = document.querySelector('.tag');
const input = tagElement.querySelector('input');

input.addEventListener('change', () => {
  tagElement.setAttribute('data-checked', input.checked.toString());
});
```

## Minify with PurgeCSS and CSSO

When you use the full bundled `.css` file we provide, you could easily reduce the file size by removing unused CSS classes. This can be done with [PurgeCSS](https://purgecss.com/) and [CSSO](https://github.com/css/csso).

Install both with:

```shell
npm i purgecss csso --save-dev
```

Next you should create a file, e.g. `purgecss.js` in your project root with the following content:

```javascript
import { writeFileSync } from "node:fs";

import { PurgeCSS } from "purgecss";
import { minify } from "csso";

const distFolder = "dist"; // TODO: Change me if you need another folder

new PurgeCSS()
	.purge({
		content: [`${distFolder}/**/*.html`, `${distFolder}/**/*.js`],
		css: [`${distFolder}/**/*.css`],
		defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		variables: true,
		rejectedCss: true,
		safelist: {
			variables: [
				/* TODO: Keep only the densities you need */
				/-functional-/,
				/-regular-/,
				/-expressive-/,
				/* Keep density & all color properties/variables */
				/-default$/,
				/-hovered$/,
				/-pressed$/
			],
			/* Some components require a safelist */
			greedy: [
				/db-tabs/ // TODO: Add more components if necessary
			]
		}
	})
	.then((purgeCSSResult) => {
		for (const result of purgeCSSResult) {
			writeFileSync(result.file, minify(result.css).css);

			/* Optional: for debugging */
			// writeFileSync(`rejected.css`, result.rejectedCss || "");
		}
	});
```

You can run this script with `node purgecss.js` and it will minify your CSS files. You can also add this script to your `package.json` to run after your regular build process:

```json
{
	"scripts": {
		"postbuild": "node purgecss.js"
	}
}
```
