import type { ReplaceInFileConfig } from 'replace-in-file';

/**
 * Migration script for converting SCSS files to native CSS syntax.
 *
 * This migration handles:
 * 1. Converting @use to @import
 * 2. Converting @forward to @import
 * 3. Converting Sass @mixin to native CSS @mixin --name()
 * 4. Converting Sass @include to native CSS @apply --name()
 * 5. Converting Sass %placeholder to native CSS @macro --name
 * 6. Converting Sass @extend to native CSS @apply --name
 * 7. Converting SCSS single-line comments to CSS comments
 * 8. Updating file extensions in imports (.scss -> .css)
 *
 * Note: This does NOT handle:
 * - @each loops (use postcss-each plugin)
 * - @if/@else blocks (use native CSS if() function)
 * - Complex Sass functions (convert to native CSS @function)
 * - Sass variables (most already map to CSS Custom Properties)
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
	// @mixin name($param) { -> @mixin --name() {
	// Note: Native CSS @mixin doesn't support parameters in the same way
	{
		files: '',
		from: /@mixin\s+(\w[\w-]*)\s*\([^)]*\)\s*\{/g,
		to: '@mixin --$1 {'
	},

	// Convert Sass @mixin definitions without parameters to native CSS @mixin
	// @mixin name() { -> @mixin --name() {
	// @mixin name { -> @mixin --name {
	{
		files: '',
		from: /@mixin\s+(\w[\w-]*)\s*(?:\(\s*\))?\s*\{/g,
		to: '@mixin --$1 {'
	},

	// Convert Sass %placeholder to native CSS @macro
	// %placeholder-name { -> @macro --placeholder-name {
	{
		files: '',
		from: /%(\w[\w-]*)\s*\{/g,
		to: '@macro --$1 {'
	},

	// Convert @include with content block to @apply (remove content block)
	// @include name { content } -> @apply --name;
	{
		files: '',
		from: /@include\s+(\w[\w-]*(?:\.\w[\w-]*)?)\s*\{[^}]*\}/g,
		to: '@apply --$1;'
	},

	// Convert @include with parameters to @apply
	// @include name(params); -> @apply --name;
	{
		files: '',
		from: /@include\s+(\w[\w-]*(?:\.\w[\w-]*)?)\s*\([^)]*\)\s*;/g,
		to: '@apply --$1;'
	},

	// Convert simple @include without parameters to @apply
	// @include name; -> @apply --name;
	{
		files: '',
		from: /@include\s+(\w[\w-]*(?:\.\w[\w-]*)?)\s*;/g,
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

	// Convert Sass string interpolation in simple cases
	// #{$var} where $var is a simple variable -> var(--var)
	// This handles the common pattern: #{variables.$db-sizing-md}
	{
		files: '',
		from: /#\{variables\.\$db-([\w-]+)\}/g,
		to: 'var(--db-$1)'
	},

	// Convert Sass string interpolation for colors
	{
		files: '',
		from: /#\{colors\.\$db-([\w-]+)\}/g,
		to: 'var(--db-$1)'
	},

	// Convert simple Sass variable interpolation
	// #{$variable} -> var(--variable) (when variable maps to CSS custom property)
	{
		files: '',
		from: /#\{\$db-([\w-]+)\}/g,
		to: 'var(--db-$1)'
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
 *    - @mixin --name { ... } and @apply --name;
 *    - @macro --name { ... } and @apply --name;
 *    - if(condition, true-value, false-value)
 *    - @function --name(--param) { result: value; }
 */
