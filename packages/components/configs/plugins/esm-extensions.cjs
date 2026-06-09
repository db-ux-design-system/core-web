const fs = require('node:fs');
const path = require('node:path');

/**
 * Resolves a relative import specifier to an explicit ESM path with .js extension.
 * Works on compiled output (dist/) where files are .js and .d.ts.
 * - Directory with index.js → ./dir/index.js
 * - File .js exists → ./file.js
 * - Already has extension or is not relative → unchanged
 *
 * @param {string} importPath - The import specifier (e.g. './model', '../utils')
 * @param {string} fromFile   - Absolute path of the file containing the import
 * @returns {string}
 */
const resolveEsmPath = (importPath, fromFile) => {
	if (!importPath.startsWith('.')) {
		return importPath;
	}

	if (/\.(js|mjs|cjs|json|css|scss)$/.test(importPath)) {
		return importPath;
	}

	const baseDir = path.dirname(fromFile);
	const absolute = path.resolve(baseDir, importPath);

	// Is it a directory with an index file?
	if (fs.existsSync(absolute) && fs.statSync(absolute).isDirectory()) {
		if (fs.existsSync(path.join(absolute, 'index.js'))) {
			return `${importPath}/index.js`;
		}
	}

	// Is it a file (.js)?
	if (fs.existsSync(`${absolute}.js`)) {
		return `${importPath}.js`;
	}

	return importPath;
};

/**
 * Fixes all relative import/export specifiers in a file
 * by appending explicit .js extensions.
 *
 * @param {string} filePath - Absolute path to the file
 */
const fixFileImports = (filePath) => {
	if (!fs.existsSync(filePath)) return;

	const source = fs.readFileSync(filePath, 'utf-8');

	const fixed = source.replace(
		/((?:from|import)\s+['"])(\.[^'"]+)(['"])/g,
		(match, prefix, importPath, suffix) => {
			const resolved = resolveEsmPath(importPath, filePath);
			return `${prefix}${resolved}${suffix}`;
		}
	);

	if (fixed !== source) {
		fs.writeFileSync(filePath, fixed, 'utf-8');
	}
};

/**
 * Recursively collects all .js and .d.ts files under a directory.
 * These are the compiled outputs that need ESM extension fixing.
 * @param {string} dir
 * @returns {string[]}
 */
const collectFiles = (dir) => {
	if (!fs.existsSync(dir)) return [];
	const results = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.resolve(dir, entry.name);
		if (entry.isDirectory()) {
			results.push(...collectFiles(fullPath));
		} else if (/\.(js|d\.ts)$/.test(entry.name)) {
			results.push(fullPath);
		}
	}
	return results;
};

/**
 * Fixes ESM import extensions in compiled output (dist/) directory.
 * Must be run AFTER tsc compilation, not on source files.
 *
 * Source files in src/ are consumed directly as TypeScript by showcases
 * (via transpilePackages/Turbopack), so they must NOT have .js extensions.
 * Only the compiled dist/ output (published to npm) needs explicit .js extensions.
 *
 * @param {string} distDir - Absolute path to the dist directory
 */
const fixDistImports = (distDir) => {
	for (const filePath of collectFiles(distDir)) {
		fixFileImports(filePath);
	}
};

/**
 * Mitosis build.post plugin — intentionally a no-op.
 * ESM extension fixing is now handled post-tsc via fixDistImports().
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'esm-extensions',
	build: {
		post: () => {
			// No-op: extensions are fixed post-tsc by fix-esm-imports.cjs
		}
	}
});

module.exports.fixDistImports = fixDistImports;
module.exports.resolveEsmPath = resolveEsmPath;
module.exports.fixFileImports = fixFileImports;
module.exports.collectFiles = collectFiles;
