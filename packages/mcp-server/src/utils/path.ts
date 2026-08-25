import { resolve } from 'node:path';

/**
 Normalizes a path to use forward slashes on all platforms.
 Used internally so that startsWith checks work cross-platform.
 */
function normalize(p: string): string {
	return p.replaceAll('\\', '/');
}

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
	while (decoded !== decodeURIComponent(decoded)) {
		decoded = decodeURIComponent(decoded);
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
