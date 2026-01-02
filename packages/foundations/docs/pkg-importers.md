# Pkg: Importers Support

## Overview

This package supports both traditional imports and the new Sass pkg: importers syntax.

## Traditional Imports (Current)

```scss
@use "@db-ux/core-foundations/build/styles/variables";
@forward "@db-ux/core-foundations/build/styles/relative";
```

Build configuration:

```bash
sass --load-path=node_modules input.scss output.css
```

## Pkg: Importers (New, Recommended)

```scss
@use "pkg:@db-ux/core-foundations/build/styles/variables";
@forward "pkg:@db-ux/core-foundations/build/styles/relative";
```

Build configuration:

```bash
sass --pkg-importer=node input.scss output.css
```

## Benefits

- ✅ **No load-path configuration needed**
- ✅ **Explicit package imports**
- ✅ **Better error messages**
- ✅ **Future-proof** approach recommended by Sass team

## Migration Guide

### Phase 1: Enable Support

Update your build tools to support pkg: importers:

```bash
# Sass CLI
sass --pkg-importer=node

# Or use both approaches during transition
sass --pkg-importer=node --load-path=node_modules
```

### Phase 2: Gradual Adoption

Start using pkg: imports in new files:

```scss
// New code
@use "pkg:@db-ux/core-foundations/build/styles/variables";

// Existing code continues to work
@use "@db-ux/core-foundations/build/styles/colors";
```

### Phase 3: Build Tool Integration

#### Vite

Vite supports pkg: importers out of the box:

```js
// vite.config.js
export default {
	css: {
		preprocessorOptions: {
			scss: {
				// No additional configuration needed for pkg: imports
			}
		}
	}
};
```

#### Webpack (sass-loader)

```js
// webpack.config.js
module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								pkgImporter: "node"
							}
						}
					}
				]
			}
		]
	}
};
```

## Backwards Compatibility

Both import syntaxes can coexist:

```scss
// Traditional (still works)
@use "@db-ux/core-foundations/build/styles/variables" as vars;

// Pkg: importers (new)
@use "pkg:@db-ux/core-foundations/build/styles/colors";

.example {
	padding: vars.$db-spacing-fixed-md;
	color: colors.$db-adaptive-on-bg-basic-emphasis-100-default;
}
```

## Requirements

- **Sass version**: 1.71.0 or later (current: 1.85.0 ✅)
- **Build tool**: Must support pkg: importers or use `--pkg-importer=node` flag
