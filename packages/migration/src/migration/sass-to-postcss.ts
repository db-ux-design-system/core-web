import type { ReplaceInFileConfig } from 'replace-in-file';

/**
 * Migration script for converting SCSS files to native CSS syntax.
 *
 * This migration handles:
 * 1. Removing @use "sass:..." imports (SASS built-in methods)
 * 2. Converting @use to @import
 * 3. Converting @forward to @import
 * 4. Converting Sass @mixin to native CSS @mixin --name(--params)
 * 5. Converting Sass @include to native CSS @apply --name() { body }
 * 6. Converting Sass %placeholder to native CSS @macro --name
 * 7. Converting Sass @extend to native CSS @apply --name
 * 8. Converting SCSS single-line comments to CSS comments
 * 9. Updating file extensions in imports (.scss -> .css)
 * 10. Converting #{...} interpolation syntax to var(--...)
 * 11. Removing SASS variable declarations and maps
 * 12. Removing imports that only provided SASS variables
 *
 * Note: This does NOT handle:
 * - @each loops (use postcss-each plugin)
 * - @if/@else blocks (use native CSS if() function)
 * - Complex Sass functions (convert to native CSS @function)
 */
export const sass_to_postcss: ReplaceInFileConfig[] = [
	// Convert @use with namespace to @import (double quotes)
	// @use "@db-ux/..." -> @import "@db-ux/..."
	{
		files: '',
		from: /@use\s+"([^"]+)"(?:\s+as\s+\w+)?;/g,
		to: '@import "$1";'
	},

	// Convert @use with namespace to @import (single quotes)
	// @use '@db-ux/...' -> @import '@db-ux/...'
	{
		files: '',
		from: /@use\s+'([^']+)'(?:\s+as\s+\w+)?;/g,
		to: "@import '$1';"
	},

	// Remove @import "sass:..." imports (SASS built-in methods like sass:math, sass:map, etc.)
	// These were converted from @use above and have no CSS equivalent
	{
		files: '',
		from: /@import\s+"sass:[^"]+";\n?/g,
		to: ''
	},

	// Remove @import 'sass:...' imports (single quotes)
	{
		files: '',
		from: /@import\s+'sass:[^']+';\n?/g,
		to: ''
	},

	// Convert @forward to @import (double quotes)
	// @forward "./path" -> @import "./path"
	{
		files: '',
		from: /@forward\s+"([^"]+)";/g,
		to: '@import "$1";'
	},

	// Convert @forward to @import (single quotes)
	// @forward './path' -> @import './path'
	{
		files: '',
		from: /@forward\s+'([^']+)';/g,
		to: "@import '$1';"
	},

	// Convert Sass @mixin definitions with parameters to native CSS @mixin
	// First step: @mixin name($param: "default") { -> @mixin --name($param: "default") {
	// Then step 2 below will convert $param to --param
	{
		files: '',
		from: /@mixin\s+(\w[\w-]*)\s*\(([^)]+)\)\s*\{/g,
		to: '@mixin --$1($2) {'
	},

	// Convert Sass @mixin definitions without parameters to native CSS @mixin
	// @mixin name() { -> @mixin --name() {
	// @mixin name { -> @mixin --name {
	{
		files: '',
		from: /@mixin\s+(\w[\w-]*)\s*(?:\(\s*\))?\s*\{/g,
		to: '@mixin --$1 {'
	},

	// Convert $parameter to --parameter in mixin parameter lists
	// This converts @mixin --name($param: to @mixin --name(--param:
	{
		files: '',
		from: /(@mixin\s+--[\w-]+\()(\$)([\w-]+)/g,
		to: '$1--$3'
	},

	// Also handle subsequent parameters in mixin definitions
	// This converts , $param to , --param within mixin parameter lists
	{
		files: '',
		from: /(,\s*)(\$)([\w-]+)/g,
		to: '$1--$3'
	},

	// Convert Sass %placeholder to native CSS @macro
	// %placeholder-name { -> @macro --placeholder-name {
	{
		files: '',
		from: /%(\w[\w-]*)\s*\{/g,
		to: '@macro --$1 {'
	},

	// Convert @include with content block (namespace.mixin) to @apply with body
	// @include helpers.hover { background-color: red; } -> @apply --hover() { background-color: red; };
	{
		files: '',
		from: /@include\s+\w[\w-]*\.(\w[\w-]*)\s*\{([^}]*)\}/g,
		to: '@apply --$1() {$2};'
	},

	// Convert @include with content block (simple mixin) to @apply with body
	// @include cursor-pointer { background: blue; } -> @apply --cursor-pointer() { background: blue; };
	{
		files: '',
		from: /@include\s+(\w[\w-]*)\s*\{([^}]*)\}/g,
		to: '@apply --$1() {$2};'
	},

	// Convert @include with parameters (namespace.mixin) to @apply
	// @include namespace.mixin(params); -> @apply --mixin(params);
	{
		files: '',
		from: /@include\s+\w[\w-]*\.(\w[\w-]*)\s*\(([^)]*)\)\s*;/g,
		to: '@apply --$1($2);'
	},

	// Convert @include with parameters (simple mixin) to @apply
	// @include mixin(params); -> @apply --mixin(params);
	{
		files: '',
		from: /@include\s+(\w[\w-]*)\s*\(([^)]*)\)\s*;/g,
		to: '@apply --$1($2);'
	},

	// Convert simple @include without parameters (namespace.mixin) to @apply
	// @include namespace.mixin; -> @apply --mixin;
	{
		files: '',
		from: /@include\s+\w[\w-]*\.(\w[\w-]*)\s*;/g,
		to: '@apply --$1;'
	},

	// Convert simple @include without parameters to @apply
	// @include name; -> @apply --name;
	{
		files: '',
		from: /@include\s+(\w[\w-]*)\s*;/g,
		to: '@apply --$1;'
	},

	// Convert @extend %placeholder to @apply
	// @extend %placeholder-name; -> @apply --placeholder-name;
	{
		files: '',
		from: /@extend\s+%(\w[\w-]*)\s*;/g,
		to: '@apply --$1;'
	},

	// Convert SCSS single-line comments to CSS comments
	// // comment -> /* comment */
	// Only match lines that start with // (with optional whitespace)
	// Excludes lines starting with URL protocols (http://, https://, etc.)
	{
		files: '',
		from: /^(\s*)\/\/(?!\/)(?!:)\s*(.*)$/gm,
		to: '$1/* $2 */'
	},

	// Update .scss file extensions to .css in imports (double quotes)
	{
		files: '',
		from: /@import\s+"([^"]+)\.scss";/g,
		to: '@import "$1.css";'
	},

	// Update .scss file extensions to .css in imports (single quotes)
	{
		files: '',
		from: /@import\s+'([^']+)\.scss';/g,
		to: "@import '$1.css';"
	},

	// Add .css extension to imports without any extension (double quotes)
	// @import "path/file"; -> @import "path/file.css";
	// Only match if path doesn't end with .css, .scss, or other extensions
	{
		files: '',
		from: /@import\s+"([^"]+?)(?<!\.css|\.scss)";/g,
		to: '@import "$1.css";'
	},

	// Add .css extension to imports without any extension (single quotes)
	{
		files: '',
		from: /@import\s+'([^']+?)(?<!\.css|\.scss)';/g,
		to: "@import '$1.css';"
	},

	// Handle partial file imports with relative paths (files starting with _)
	// Sass allows importing _file.scss as "file" or "./_file"
	// PostCSS needs the full path with extension
	{
		files: '',
		from: /@import\s+"(\.\.?\/[^"]*?)(_[\w-]+)";/g,
		to: '@import "$1$2.css";'
	},

	// Handle partial file imports with relative paths (single quotes)
	{
		files: '',
		from: /@import\s+'(\.\.?\/[^']*?)(_[\w-]+)';/g,
		to: "@import '$1$2.css';"
	},

	// Handle partial file imports with package scope paths (@scope/_partial)
	{
		files: '',
		from: /@import\s+"(@[\w-]+\/[^"]*?)(_[\w-]+)";/g,
		to: '@import "$1$2.css";'
	},

	// Convert Sass string interpolation with namespace variables
	// #{variables.$db-sizing-md} -> var(--db-sizing-md)
	{
		files: '',
		from: /#\{variables\.\$db-([\w-]+)\}/g,
		to: 'var(--db-$1)'
	},

	// Convert Sass string interpolation for colors
	// #{colors.$db-adaptive-...} -> var(--db-adaptive-...)
	{
		files: '',
		from: /#\{colors\.\$db-([\w-]+)\}/g,
		to: 'var(--db-$1)'
	},

	// Convert Sass string interpolation with any namespace
	// #{namespace.$db-...} -> var(--db-...)
	{
		files: '',
		from: /#\{\w[\w-]*\.\$db-([\w-]+)\}/g,
		to: 'var(--db-$1)'
	},

	// Convert simple Sass variable interpolation
	// #{$db-variable} -> var(--db-variable)
	{
		files: '',
		from: /#\{\$db-([\w-]+)\}/g,
		to: 'var(--db-$1)'
	},

	// Convert any remaining Sass variable interpolation with $
	// #{$variable} -> var(--variable)
	{
		files: '',
		from: /#\{\$(\w[\w-]*)\}/g,
		to: 'var(--$1)'
	},

	// Convert namespace references in variables (common pattern)
	// variables.$db-sizing-md -> var(--db-sizing-md)
	{
		files: '',
		from: /variables\.\$db-([\w-]+)/g,
		to: 'var(--db-$1)'
	},

	// Convert namespace references in colors
	// colors.$db-adaptive-... -> var(--db-adaptive-...)
	{
		files: '',
		from: /colors\.\$db-([\w-]+)/g,
		to: 'var(--db-$1)'
	},

	// Convert namespace references in helpers (for function calls)
	// helpers.hover -> hover
	{
		files: '',
		from: /helpers\.(\w+)/g,
		to: '$1'
	},

	// Convert namespace references in icons
	// icons.is-icon-text-replace -> is-icon-text-replace
	{
		files: '',
		from: /icons\.(\w[\w-]*)/g,
		to: '$1'
	},

	// Remove @charset declarations (not needed in CSS imports)
	{
		files: '',
		from: /@charset\s+"utf-8";\n?/gi,
		to: ''
	},

	// Remove imports that only provided SASS variables (now replaced with CSS variables)
	// @import "@db-ux/core-foundations/build/styles/colors.css";
	{
		files: '',
		from: /@import\s+["']@db-ux\/core-foundations\/build\/styles\/colors\.css["'];\n?/g,
		to: ''
	},

	// @import "@db-ux/core-foundations/build/styles/variables.css";
	{
		files: '',
		from: /@import\s+["']@db-ux\/core-foundations\/build\/styles\/variables\.css["'];\n?/g,
		to: ''
	},

	// @import "@db-ux/core-foundations/build/styles/fonts.css";
	{
		files: '',
		from: /@import\s+["']@db-ux\/core-foundations\/build\/styles\/fonts\.css["'];\n?/g,
		to: ''
	},

	// @import "@db-ux/core-foundations/build/styles/screen-sizes.css";
	{
		files: '',
		from: /@import\s+["']@db-ux\/core-foundations\/build\/styles\/screen-sizes\.css["'];\n?/g,
		to: ''
	},

	// @import "@db-ux/core-foundations/build/styles/css.css"; (generic css import)
	{
		files: '',
		from: /@import\s+["']@db-ux\/core-foundations\/build\/styles\/css\.css["'];\n?/g,
		to: ''
	},

	// @import "@db-ux/core-foundations/build/styles/css.css"; (generic css import)
	{
		files: '',
		from: /@import\s+["']@db-ux\/core-foundations\/build\/styles\/css["'];\n?/g,
		to: ''
	},

	// Remove SASS variable declarations (single line)
	// $variable-name: value;
	{
		files: '',
		from: /^\s*\$[\w-]+:\s*[^;]+;\n?/gm,
		to: ''
	},

	// Remove SASS map declarations (multiline)
	// $map-name: ( ... );
	{
		files: '',
		from: /^\s*\$[\w-]+:\s*\([^)]*\);\n?/gm,
		to: ''
	}
];

/**
 * Additional manual steps required after running migration:
 *
 * 1. Rename .scss files to .css:
 *    find packages -name "*.scss" -exec bash -c 'mv "$0" "${0%.scss}.css"' {} \;
 *
 * 2. @each loops are supported via postcss-each plugin - no manual expansion needed
 *
 * 3. Convert @if/@else blocks to native CSS if() function:
 *    @if $condition { ... } @else { ... }
 *    becomes
 *    property: if(style(--condition: value), result1, result2);
 *
 * 4. Convert Sass @function to native CSS @function:
 *    @function name($param) { @return value; }
 *    becomes
 *    @function --name(--param) { result: value; }
 *
 * 5. Update build scripts to use PostCSS instead of Sass
 *
 * 6. Add required PostCSS plugins:
 *    - postcss-import (for @import handling)
 *    - postcss-each (for @each loops)
 *    - postcss-transform-mixins (for legacy browser support of @mixin/@macro/@apply)
 *    - postcss-if-function (for legacy browser support of if())
 *
 * Native CSS features used (modern browsers only):
 *    - @mixin --name(--params) { ... } and @apply --name() { body };
 *    - @macro --name { ... } and @apply --name;
 *    - if(condition, true-value, false-value)
 *    - @function --name(--param) { result: value; }
 *
 * Migration transformations:
 *    - @use "sass:math" -> (removed, no replacement needed)
 *    - @include helpers.hover { body } -> @apply --hover() { body };
 *    - @mixin set-button($selector: "&") { -> @mixin --set-button(--selector: "&") {
 *    - #{colors.$db-adaptive-...} -> var(--db-adaptive-...)
 *    - $variable: value; -> (removed, SASS variable declarations)
 *    - @import "@db-ux/core-foundations/build/styles/colors.css"; -> (removed)
 */
