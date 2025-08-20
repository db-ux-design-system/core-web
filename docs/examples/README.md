# Pkg: Importers Example

## Setup

This directory demonstrates how to use Sass pkg: importers with the DB UX Design System.

## Traditional Approach (Current)

```scss
// Requires --load-path=node_modules
@use "@db-ux/core-foundations/build/styles/variables";

.example {
  padding: variables.$db-spacing-fixed-md;
}
```

Build command:
```bash
sass --load-path=node_modules input.scss output.css
```

## Pkg: Importers Approach (New)

```scss
// No load-path needed
@use "pkg:@db-ux/core-foundations/build/styles/variables";

.example {
  padding: variables.$db-spacing-fixed-md;
}
```

Build command:
```bash
sass --pkg-importer=node input.scss output.css
```

## Test Results

Both approaches produce identical output, but pkg: importers:
- ✅ Remove need for load-path configuration
- ✅ Make package imports explicit
- ✅ Work with existing `@use`/`@forward` syntax
- ✅ Are fully backwards compatible

## Build Tool Support

Most modern build tools support pkg: importers:
- **Sass CLI**: `--pkg-importer=node`
- **Vite**: Built-in support
- **Webpack**: Via sass-loader configuration

## Recommendation

Support both syntaxes to allow gradual migration without breaking existing users.