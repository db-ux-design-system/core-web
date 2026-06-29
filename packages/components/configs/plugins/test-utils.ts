import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

/**
 * Shared filesystem helpers for Mitosis plugin unit tests.
 *
 * The plugins operate on generated files on disk, so their tests need a
 * throwaway directory and a small helper to populate it. Centralizing this
 * setup keeps the individual spec files free of duplicated boilerplate.
 */

/**
 * Creates a fresh, unique temporary directory for a single test run.
 *
 * @param prefix - A short, human-readable prefix for the directory name
 * @returns The absolute path to the created temporary directory
 */
export const createTempDir = (prefix: string): string =>
	fs.mkdtempSync(path.join(os.tmpdir(), `${prefix}-`));

/**
 * Removes a temporary directory and all of its contents. Safe to call even if
 * the directory no longer exists.
 *
 * @param dir - The absolute path to the directory to remove
 */
export const removeTempDir = (dir: string): void => {
	fs.rmSync(dir, {recursive: true, force: true});
};

/**
 * Writes a file (creating parent directories as needed) inside the given base
 * directory and returns the absolute path to it.
 *
 * @param baseDir - The directory the relative path is resolved against
 * @param relativePath - The file path relative to `baseDir`
 * @param content - The file contents (defaults to an empty string)
 * @returns The absolute path to the written file
 */
export const writeFileIn = (
	baseDir: string,
	relativePath: string,
	content = '',
): string => {
	const absolute = path.join(baseDir, relativePath);
	fs.mkdirSync(path.dirname(absolute), {recursive: true});
	fs.writeFileSync(absolute, content, 'utf-8');
	return absolute;
};
