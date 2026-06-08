const fs = require('node:fs');
const path = require('node:path');

/**
 * Resolves a relative import specifier to an explicit ESM path with .js extension.
 * - Directory with index.ts(x) → ./dir/index.js
 * - File .ts(x) → ./file.js
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
		if (
			fs.existsSync(path.join(absolute, 'index.ts')) ||
			fs.existsSync(path.join(absolute, 'index.tsx'))
		) {
			return `${importPath}/index.js`;
		}
	}

	// Is it a file (.ts or .tsx)?
	if (fs.existsSync(`${absolute}.ts`) || fs.existsSync(`${absolute}.tsx`)) {
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
 * Recursively collects all .ts/.tsx files under a directory.
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
		} else if (/\.(ts|tsx)$/.test(entry.name)) {
			results.push(fullPath);
		}
	}
	return results;
};

/**
 * Mitosis build.post plugin that appends explicit .js extensions to all
 * relative import/export specifiers in generated output files.
 *
 * This ensures the output is valid ESM that works in strict environments
 * like Node.js and Vitest without needing tsc-esm-fix or Vite.
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'esm-extensions',
	build: {
		post: (targetContext, files) => {
			if (!files) return;

			const allOutputFiles = [
				...(files.componentFiles || []),
				...(files.nonComponentFiles || [])
			];

			if (allOutputFiles.length === 0) return;

			// Determine the src directory from the first file's outputDir
			const outputDir = path.resolve(allOutputFiles[0].outputDir);
			const srcDir = path.resolve(outputDir, 'src');

			// Fix ALL .ts/.tsx files in the entire src directory
			// This covers component barrels, shared utils, and root index.ts
			for (const filePath of collectFiles(srcDir)) {
				fixFileImports(filePath);
			}
		}
	}
});
