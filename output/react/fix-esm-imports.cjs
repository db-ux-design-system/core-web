/**
 * Post-tsc script that adds explicit .js extensions to all relative
 * import/export specifiers in the compiled dist/ output.
 *
 * This ensures the published package is valid ESM that works in strict
 * environments (Node.js with type:"module", Vitest, etc.).
 *
 * Run after tsc: node fix-esm-imports.cjs
 */
const path = require('node:path');
const {
	fixDistImports
} = require('../../packages/components/configs/plugins/esm-extensions.cjs');

const distDir = path.resolve(__dirname, 'dist');
console.log('[esm-extensions] Fixing imports in', distDir);
fixDistImports(distDir);
console.log('[esm-extensions] Done.');
