import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

/**
 Normalizes a path to use forward slashes on all platforms.
 Used internally so that startsWith checks work cross-platform.
 */
function normalize(p: string): string {
	return p.replaceAll('\\', '/');
}

/**
 Locates the package root by walking up from this module until a directory
 containing package.json is found.

 A fixed relative path cannot work here, because the depth differs between the
 two layouts this code runs in: during development and tests this module sits
 in src/utils/, while esbuild flattens the whole server into dist/index.js, so
 `import.meta.dirname` becomes the dist/ directory. The published tarball has
 the same shape as the bundle (assets/ next to dist/), so anchoring on
 package.json covers all three.

 The walk is bounded so a broken layout fails fast instead of climbing to the
 filesystem root.

 @throws {Error} When no package root is found within the search depth.
 */
function findPackageRoot(): string {
	let dir = import.meta.dirname;
	for (let depth = 0; depth < 8; depth++) {
		if (existsSync(join(dir, 'package.json'))) {
			return dir;
		}

		const parent = dirname(dir);
		if (parent === dir) {
			break;
		}

		dir = parent;
	}

	throw new Error(
		`[DB UX MCP] Could not locate the package root from ${import.meta.dirname}. The assets/ directory cannot be resolved.`
	);
}

let assetsDir: string | undefined;

/**
 Absolute path to the package's `assets/` directory.

 Runtime asset reads must go through this helper. Deriving the path with a
 fixed `../../assets` is correct for the sources but points one level outside
 the package once bundled — which made the visuals tools report an empty
 directory and the design-token tool silently fall back to raw SCSS.

 Resolved lazily and memoised rather than computed at module scope: this module
 is imported transitively by everything, including the publicly exported
 {@link resolveSafePath}, so a module-level constant would put up to 8
 `existsSync` calls and a possible throw into the import of any consumer —
 before a handler exists that could turn the failure into a readable result.
 Fail-fast behaviour is unchanged, it just moves to first use.

 @throws {Error} When no package root is found within the search depth.
 */
export function getAssetsDir(): string {
	assetsDir ??= join(findPackageRoot(), 'assets');

	return assetsDir;
}

/**
 Collapses URL-encoded sequences repeatedly until stable, so double-encoding
 (%252F -> %2F -> /) cannot hide a traversal from the containment check.

 Returns the input unchanged when it contains a malformed escape sequence: a
 literal '%' in a real filename makes decodeURIComponent throw, and that must
 not be mistaken for an attack.
 */
function decodeFully(userPath: string): string {
	let decoded = userPath;
	try {
		while (decoded !== decodeURIComponent(decoded)) {
			decoded = decodeURIComponent(decoded);
		}
	} catch {
		return userPath;
	}

	return decoded;
}

/** Whether `candidate` is the base directory itself or sits below it. */
function isContained(absoluteBase: string, candidate: string): boolean {
	return (
		candidate === absoluteBase || candidate.startsWith(absoluteBase + '/')
	);
}

/**
 Resolves a user-supplied path relative to a base directory and ensures the
 result stays strictly within that base (path traversal protection).

 The percent-decoded form is *validated* but never used for the returned path.
 Decoding is a guard against a caller that hands over a URL-derived string, not
 a path-rewriting step: at the filesystem layer `%2E%2E%2F` is a literal filename
 inside the base, so rewriting it would turn a legitimate name such as
 `report%20final.tsx` into a different file (`report final.tsx`) and report the
 original as missing. Both forms therefore have to pass the containment check,
 and the raw one is what gets returned.

 @throws {Error} When the resolved path escapes the base directory.
 */
export function resolveSafePath(baseDir: string, userPath: string): string {
	const absoluteBase = normalize(resolve(baseDir));
	const absoluteRequested = normalize(resolve(baseDir, userPath));
	const absoluteDecoded = normalize(resolve(baseDir, decodeFully(userPath)));

	if (
		!isContained(absoluteBase, absoluteRequested) ||
		!isContained(absoluteBase, absoluteDecoded)
	) {
		throw new Error('Path traversal detected');
	}

	return absoluteRequested;
}
