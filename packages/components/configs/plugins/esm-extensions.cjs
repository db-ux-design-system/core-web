const fs = require('node:fs');
const path = require('node:path');

/**
 * Resolves a relative import specifier to an explicit ESM path with a .js
 * extension. Runs on the generated Mitosis source (.ts/.tsx), so the on-disk
 * counterparts are TypeScript files that tsc later emits as .js.
 * - Directory with index.ts(x) → ./dir/index.js
 * - File .ts(x)                → ./file.js
 * - Already has an extension or is not relative → unchanged
 *
 * @param {string} importPath - The import specifier (e.g. './model', '../utils')
 * @param {string} fromFile   - Absolute path of the file containing the import
 * @returns {string}
 */
const resolveEsmPath = (importPath, fromFile) => {
	if (!importPath.startsWith('.')) {
		return importPath;
	}

	// Skip specifiers that already carry an explicit extension.
	// `.vue` is included because this plugin also runs for the Vue output;
	// without it, `./foo.vue` would fall through to the filesystem checks
	// below and trigger unnecessary work (and could be rewritten incorrectly
	// if a `foo.vue.ts` ever existed).
	if (/\.(js|mjs|cjs|json|css|scss|vue)$/.test(importPath)) {
		return importPath;
	}

	const baseDir = path.dirname(fromFile);
	const absolute = path.resolve(baseDir, importPath);

	// Directory import → append /index.js
	if (
		fs.existsSync(absolute) &&
		fs.statSync(absolute).isDirectory() &&
		(fs.existsSync(path.join(absolute, 'index.ts')) ||
			fs.existsSync(path.join(absolute, 'index.tsx')))
	) {
		return `${importPath}/index.js`;
	}

	// File import → append .js for the TS sources tsc compiles to .js.
	if (fs.existsSync(`${absolute}.ts`) || fs.existsSync(`${absolute}.tsx`)) {
		return `${importPath}.js`;
	}

	// Vue single-file components: a barrel that re-exports `./<name>` (without
	// extension) pointing at a `<name>.vue` file gets the `.vue` extension
	// appended directly. This avoids needing a separate post-build
	// replaceInFileSync step and keeps all extension resolution in one place.
	if (fs.existsSync(`${absolute}.vue`)) {
		return `${importPath}.vue`;
	}

	if (
		fs.existsSync(absolute) &&
		fs.statSync(absolute).isDirectory() &&
		fs.existsSync(path.join(absolute, 'index.vue'))
	) {
		return `${importPath}/index.vue`;
	}

	// Could not resolve. Leave the import untouched, but surface it during the
	// build so a missing file or changed structure does not silently propagate
	// to consumers as a hard-to-debug runtime error.
	console.warn(
		`[esm-extensions] Could not resolve relative import "${importPath}" from "${fromFile}"`
	);
	return importPath;
};

/**
 * Fixes all relative import/export specifiers in a file by appending explicit
 * .js extensions.
 *
 * The regex matches relative specifiers in `import`/`export ... from` clauses
 * as well as bare side-effect imports (`import './foo'`). Mitosis output does
 * not currently emit relative side-effect imports, but they are handled
 * correctly if they ever appear.
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
 * Files matching these patterns are consumed as raw source by the showcases
 * (Next.js transpilePackages / Turbopack) and are excluded from tsc
 * compilation. They must NOT receive .js extensions because no compiled .js
 * counterpart is ever emitted for them.
 */
const EXCLUDED_PATTERNS =
	/\.(showcase|showcase-only|example|arg\.types)\.(ts|tsx)$/;

/**
 * Mitosis build.post plugin that appends explicit .js extensions to all
 * relative import/export specifiers in generated output files.
 *
 * This produces valid ESM that works in strict environments like Node.js and
 * Vitest without needing tsc-esm-fix or Vite, and is reused across the React,
 * Vue and Stencil outputs which all share the same problem.
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'esm-extensions',
	build: {
		post: (targetContext, files) => {
			if (!files) return;

			// `componentFiles` + `nonComponentFiles` together cover every file
			// the Mitosis build wrote for this target (components, barrels,
			// shared utils, models) — no filesystem walk needed. The main
			// Mitosis config's `files` glob (`src/**/*.{lite.tsx,ts}`) also
			// matches showcase/example sources, so those generated files appear
			// here too. They are consumed as raw TS and excluded from tsc, so
			// they must be skipped (see EXCLUDED_PATTERNS).
			const allOutputFiles = [
				...(files.componentFiles || []),
				...(files.nonComponentFiles || [])
			];

			for (const file of allOutputFiles) {
				if (EXCLUDED_PATTERNS.test(file.outputFilePath)) {
					continue;
				}

				const filePath = path.resolve(
					file.outputDir,
					file.outputFilePath
				);
				fixFileImports(filePath);
			}
		}
	}
});

module.exports.resolveEsmPath = resolveEsmPath;
module.exports.fixFileImports = fixFileImports;
