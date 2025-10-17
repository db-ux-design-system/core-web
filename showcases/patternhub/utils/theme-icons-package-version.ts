// Utility to get package versions at build time
import fs from 'node:fs';
import path from 'node:path';

// This function runs at build time in Node.js environment
export function getThemeIconsVersion(): string {
	try {
		const packageJsonPath = path.resolve(
			process.cwd(),
			'node_modules/@db-ux/db-theme-icons/package.json'
		);
		const packageJson = JSON.parse(
			fs.readFileSync(packageJsonPath, 'utf8')
		);
		return packageJson.version ?? 'unknown';
	} catch (error) {
		console.warn('Could not read @db-ux/db-theme-icons version:', error);
		return 'unknown';
	}
}

// Export the version as a constant that can be imported
// This will be evaluated at build time when this module is imported
export const THEME_ICONS_VERSION = getThemeIconsVersion();
