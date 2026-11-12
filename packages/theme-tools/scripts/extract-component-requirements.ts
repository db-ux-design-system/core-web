/*
 * Extraction helper (NOT shipped — `scripts/` is excluded from the build):
 * scans the component `.lite.tsx` sources and reports, per component, the
 * literal adaptive colors and materials its template can emit — the hard-coded
 * `data-material="…"` / `data-adaptive-color="…"` values, the `props.x ??
 * 'literal'` defaults, and the string literals returned from `_getColor` /
 * `_getMaterial` getters (including the `semantic === '…' return '…'` branches).
 *
 * It seeds `src/detector/component-requirements.ts` from reality rather than by
 * hand, and the `component-requirements.spec.ts` drift test calls
 * `extractComponentRequirements()` to fail CI if the shipped manifest drifts
 * from the sources.
 *
 * Run `node scripts/extract-component-requirements.ts` from the package root to
 * print the current extraction as JSON (handy when updating the manifest).
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

/** Absolute path to the component sources this extractor scans. */
export const COMPONENTS_ROOT = resolve(
	import.meta.dirname,
	'../../components/src/components'
);

/*
 * Recursively collect every `.lite.tsx` under `dir` via synchronous
 * `readdirSync`. Deliberately NOT `fast-glob`: the drift-guard test runs in a
 * vitest worker alongside the heavy Angular `execSync` build, and fast-glob's
 * sync traversal was observed to return a PARTIAL file list under that
 * concurrent I/O load, making the extraction (and thus the test) flaky. A plain
 * depth-first `readdirSync` walk is deterministic regardless of concurrent
 * load.
 */
const collectLiteFiles = (dir: string): string[] => {
	const found: string[] = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			found.push(...collectLiteFiles(full));
		} else if (entry.isFile() && entry.name.endsWith('.lite.tsx')) {
			found.push(full);
		}
	}
	return found;
};

/* Literal attribute values written directly in the template. */
const DATA_COLOR = /data-(?:alt-state-)?adaptive-color=["']([\w-]+)["']/g;
const DATA_MATERIAL = /data-(?:alt-state-)?material=["']([\w-]+)["']/g;
/* Inline defaults written as `props.color ?? 'literal'` in the template/JSX. */
const DEFAULT_COLOR =
	/props\.(?:color|altStateColor)\s*\?\?\s*['"]([\w-]+)['"]/g;
const DEFAULT_MATERIAL =
	/props\.(?:material|altStateMaterial)\s*\?\?\s*['"]([\w-]+)['"]/g;
/* Generic `return 'literal';` inside a _getColor/_getMaterial getter (also
 * covers the `semantic === '…' return '…'` branches). */
const GETTER_BLOCK =
	/_get(?:AltState)?(Color|Material)[^{]*\{([\s\S]*?)\n\t\t\}/g;
const RETURN_LITERAL = /return\s*['"]([\w-]+)['"]/g;

const VALID_MATERIALS = new Set([
	'filled-1',
	'filled-2',
	'filled-3',
	'vibrant',
	'origin',
	'inverted',
	'semi-transparent',
	'transparent'
]);

/*
 * Read a `.lite.tsx` synchronously, retrying on an empty result. A component
 * template is never legitimately empty, so a zero-length read is a transient
 * filesystem hiccup (observed when the drift-guard test runs in a vitest worker
 * alongside the heavy Angular/webpack `execSync` fixture builds, which saturate
 * I/O). Retrying a few times makes the extraction deterministic rather than
 * silently dropping a component and failing the comparison.
 */
const readLiteFile = (file: string): string => {
	for (let attempt = 0; attempt < 5; attempt++) {
		const code = readFileSync(file, 'utf-8');
		if (code.length > 0) {
			return code;
		}
	}
	return readFileSync(file, 'utf-8');
};

/** The extracted color/material sets a component's template can emit. */
export type ExtractedRequirement = {
	colors: string[];
	materials: string[];
};

/**
 * Scan every component `.lite.tsx` under {@link COMPONENTS_ROOT} and return the
 * colors/materials each component can emit, keyed by component kebab id. Only
 * components that emit at least one color or material are included; each list is
 * sorted for a stable, comparable result.
 */
export const extractComponentRequirements = (): Record<
	string,
	ExtractedRequirement
> => {
	const files = collectLiteFiles(COMPONENTS_ROOT);
	const rootPrefix = COMPONENTS_ROOT.replaceAll('\\', '/');
	const byComponent = new Map<
		string,
		{ colors: Set<string>; materials: Set<string> }
	>();

	for (const file of files) {
		const code = readLiteFile(file);
		const rel = file.replaceAll('\\', '/').slice(rootPrefix.length + 1);
		const name = rel.split('/')[0];
		if (!name) {
			continue;
		}

		const req = byComponent.get(name) ?? {
			colors: new Set<string>(),
			materials: new Set<string>()
		};

		for (const m of code.matchAll(DATA_COLOR)) {
			if (!m[1].includes('{')) {
				req.colors.add(m[1]);
			}
		}
		for (const m of code.matchAll(DATA_MATERIAL)) {
			if (VALID_MATERIALS.has(m[1])) {
				req.materials.add(m[1]);
			}
		}
		for (const m of code.matchAll(DEFAULT_COLOR)) {
			req.colors.add(m[1]);
		}
		for (const m of code.matchAll(DEFAULT_MATERIAL)) {
			if (VALID_MATERIALS.has(m[1])) {
				req.materials.add(m[1]);
			}
		}
		for (const block of code.matchAll(GETTER_BLOCK)) {
			const kind = block[1];
			for (const r of block[2].matchAll(RETURN_LITERAL)) {
				const value = r[1];
				if (kind === 'Material' && VALID_MATERIALS.has(value)) {
					req.materials.add(value);
				} else if (kind === 'Color') {
					req.colors.add(value);
				}
			}
		}

		byComponent.set(name, req);
	}

	const result: Record<string, ExtractedRequirement> = {};
	for (const [name, req] of byComponent) {
		if (req.colors.size === 0 && req.materials.size === 0) {
			continue;
		}
		result[name] = {
			colors: [...req.colors].sort(),
			materials: [...req.materials].sort()
		};
	}
	return result;
};

/*
 * When run directly (node scripts/extract-component-requirements.ts), print the
 * extraction as JSON. Guarded by comparing the resolved entry path so importing
 * the module from the drift test does not print.
 */
if (
	import.meta.filename.replaceAll('\\', '/') ===
	resolve(process.argv[1] ?? '').replaceAll('\\', '/')
) {
	console.log(JSON.stringify(extractComponentRequirements(), null, 2));
}
