# Pkg: Importers Example

This directory demonstrates how to use Sass pkg: importers with the DB UX Design System.

## Setup

```bash
npm install
```

## Traditional Approach (Current)

```scss
// test-traditional.scss
@use "@db-ux/core-foundations/build/styles/variables";

.test-traditional {
  padding: variables.$db-spacing-fixed-md;
}
```

Build command:
```bash
npx sass --load-path=node_modules test-traditional.scss test-traditional.css
```

## Pkg: Importers Approach (New)

```scss
// test-pkg-importers.scss  
@use "pkg:@db-ux/core-foundations/build/styles/variables";

.test-pkg-importers {
  padding: variables.$db-spacing-fixed-md;
}
```

Build command:
```bash
npx sass --pkg-importer=node test-pkg-importers.scss test-pkg-importers.css
```

## Complex Example

```scss
// test-pkg-complex.scss
@forward "pkg:@db-ux/core-foundations/build/styles/variables";
@use "pkg:@db-ux/core-foundations/build/styles/colors";

.test-pkg-complex {
  padding: var(--db-spacing-fixed-md);
  color: colors.$db-adaptive-on-bg-basic-emphasis-100-default;
}
```

## Test Commands

```bash
# Test traditional imports
npx sass --load-path=node_modules test-traditional.scss test-traditional.css

# Test pkg: importers
npx sass --pkg-importer=node test-pkg-importers.scss test-pkg-importers.css
npx sass --pkg-importer=node test-pkg-complex.scss test-pkg-complex.css

# Both approaches can coexist
npx sass --pkg-importer=node --load-path=node_modules test-traditional.scss test-traditional.css
```

## Results

Both approaches produce identical CSS output, demonstrating perfect compatibility.

## Build Tool Support

Most modern build tools support pkg: importers:
- **Sass CLI**: `--pkg-importer=node`
- **Vite**: Built-in support
- **Webpack**: Via sass-loader configuration

## Recommendation

Support both syntaxes to allow gradual migration without breaking existing users.