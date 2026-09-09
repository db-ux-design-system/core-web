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

/**
 Absolute path to the package's `assets/` directory.

 Runtime asset reads must go through this constant. Deriving the path with a
 fixed `../../assets` is correct for the sources but points one level outside
 the package once bundled — which made the visuals tools report an empty
 directory and the design-token tool silently fall back to raw SCSS.
 */
export const ASSETS_DIR = join(findPackageRoot(), 'assets');

/**
 Resolves a user-supplied path relative to a base directory and ensures the
 result stays strictly within that base (path traversal protection).

 Decodes URL-encoded sequences repeatedly until stable to defeat double-encoding
 bypass attempts (e.g. %252F → %2F → /).

 @throws {Error} When the resolved path escapes the base directory.
 */
export function resolveSafePath(baseDir: string, userPath: string): string {
	const absoluteBase = normalize(resolve(baseDir));
	let decoded = userPath;
	try {
		while (decoded !== decodeURIComponent(decoded)) {
			decoded = decodeURIComponent(decoded);
		}
	} catch {
		// A malformed escape sequence makes decodeURIComponent throw — a literal
		// '%' in a real filename does exactly that. Treating it as a traversal
		// attempt would reject legitimate paths, so the raw input is used and
		// still has to pass the containment check below. An undecoded string can
		// only ever name a file inside the base, never escape it.
		decoded = userPath;
	}

	const absoluteRequested = normalize(resolve(baseDir, decoded));
	if (
		!absoluteRequested.startsWith(absoluteBase + '/') &&
		absoluteRequested !== absoluteBase
	) {
		throw new Error('Path traversal detected');
	}

	return absoluteRequested;
}
