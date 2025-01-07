# Performance

If you need to improve the performance of your application, you can use the following tips:

## Minify with PurgeCSS and CSSO

When you use the full bundled `.css` file we provide, you could easily reduce the file size by removing unused CSS classes. This can be done with [PurgeCSS](https://purgecss.com/) and [CSSO](https://github.com/css/csso).

Install both with:

```shell
npm i -D purgecss csso
```

Next you should create a file, e.g. `purgecss.js` in your project root with the following content:

```javascript
import { PurgeCSS } from "purgecss";
import { minify } from "csso";

import { writeFileSync } from "node:fs";

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
