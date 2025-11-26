import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { dirname, join } = path;

// Create a require function that works in both ESM and transpiled CJS contexts
const requireFunc = (() => {
	try {
		// Try to create require using import.meta.url (works in true ESM)
		return createRequire(import.meta.url);
	} catch {
		// Fallback: in CJS context (when transpiled), require is available globally

		return typeof require === 'undefined' ? null : require;
	}
})();

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 * Uses import.meta.resolve for Node.js 24+ when available in ESM context.
 */
function getAbsolutePath(value) {
	// Try to use import.meta.resolve if available (Node.js 24+ in true ESM context)
	if (typeof import.meta?.resolve === 'function') {
		try {
			const resolvedUrl = import.meta.resolve(
				join(value, 'package.json')
			);
			return dirname(fileURLToPath(resolvedUrl));
		} catch {
			// Fall through to require.resolve
		}
	}

	// Fallback to require.resolve for transpiled CJS environments
	if (requireFunc) {
		return dirname(requireFunc.resolve(join(value, 'package.json')));
	}

	throw new Error(
		'Neither import.meta.resolve nor require.resolve is available'
	);
}

const config = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],
	framework: {
		name: getAbsolutePath('@storybook/angular'),
		options: {}
	}
};

export default config;
