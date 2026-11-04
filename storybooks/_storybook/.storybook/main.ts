// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

const baseUrl = process.env.BASE_URL || '';

/** Deployment root of the released Storybooks on GitHub Pages. */
const VERSION_ROOT = 'https://design-system.deutschebahn.com/core-web/version';

/**
 * PROTOTYPE – version dropdown for the framework refs (replaces the version
 * switcher of the Patternhub).
 *
 * Lists the latest patch of every minor release since v5.0.0, the first
 * release with the framework Storybooks. Tags are read with `git ls-remote`,
 * which works in the shallow CI checkout as well. Without network access the
 * dropdown just stays empty.
 */
type Version = [major: number, minor: number, patch: number];

const getReleaseVersions = (): Version[] => {
	try {
		const output = execFileSync(
			'git',
			['ls-remote', '--tags', '--refs', 'origin', 'v*'],
			{
				encoding: 'utf8',
				stdio: ['ignore', 'pipe', 'ignore'],
				timeout: 10_000
			}
		);
		const latestPerMinor = new Map<string, Version>();
		for (const match of output.matchAll(
			/refs\/tags\/v(\d+)\.(\d+)\.(\d+)$/gm
		)) {
			const [major, minor, patch] = match.slice(1).map(Number);
			if (major < 5) continue;
			const key = `${major}.${minor}`;
			const current = latestPerMinor.get(key);
			if (!current || patch > current[2]) {
				latestPerMinor.set(key, [major, minor, patch]);
			}
		}
		return [...latestPerMinor.values()].sort(
			(a, b) => b[0] - a[0] || b[1] - a[1]
		);
	} catch {
		return [];
	}
};

const releaseVersions = getReleaseVersions();

/**
 * Label of this build in the dropdown: the version name for a release
 * (`/core-web/version/v6.2.0`), "This build (<branch>)" for a review build
 * (`/core-web/review/<branch>`), "This build" locally.
 */
const getCurrentLabel = (): string => {
	const [, kind, name] = /\/(version|review)\/([^/]+)$/.exec(baseUrl) ?? [];
	if (kind === 'version') return name;
	if (kind === 'review') return `This build (${name})`;
	return 'This build';
};

const currentLabel = getCurrentLabel();

/**
 * `versions` of a ref: this build first, then latest and every release from
 * `since` on (the first release that contains this Storybook).
 */
const getVersions = (
	storybook: string,
	since: Version = [5, 0, 0]
): Record<string, string> => {
	const versions: Record<string, string> = {
		[currentLabel]: `${baseUrl}/${storybook}`
	};
	if (currentLabel !== 'latest') {
		versions['latest'] = `${VERSION_ROOT}/latest/${storybook}`;
	}
	for (const version of releaseVersions) {
		const comparison =
			version[0] - since[0] ||
			version[1] - since[1] ||
			version[2] - since[2];
		const name = `v${version.join('.')}`;
		if (comparison >= 0 && name !== currentLabel) {
			versions[name] = `${VERSION_ROOT}/${name}/${storybook}`;
		}
	}
	return versions;
};

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [getAbsolutePath('@storybook/addon-docs')],
	staticDirs: [
		'../public',
		// Logo and fonts of the Storybook UI, see manager-head.html.
		{
			from: '../../../packages/foundations/assets/images',
			to: '/brand/images'
		},
		{
			from: '../node_modules/@db-ux/db-theme-fonts/build/assets',
			to: '/brand/fonts'
		}
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {}
	},
	async viteFinal(config, { configType }) {
		const { mergeConfig } = await import('vite');

		const isDev = configType === 'DEVELOPMENT';
		const frameworkUrls = {
			angular: isDev
				? 'http://localhost:6006'
				: `${baseUrl}/angular-storybook`,
			html: isDev ? 'http://localhost:6008' : `${baseUrl}/html-storybook`,
			react: isDev
				? 'http://localhost:6005'
				: `${baseUrl}/react-storybook`,
			vue: isDev ? 'http://localhost:6007' : `${baseUrl}/vue-storybook`,
			webComponents: isDev
				? 'http://localhost:6009'
				: `${baseUrl}/stencil-storybook`
		};

		return mergeConfig(config, {
			// TODO: Remove `/storybook` after removing patternhub
			base: `${baseUrl}/composition-storybook`,
			build: {
				cssMinify: 'esbuild'
			},
			define: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				__FRAMEWORK_URLS__: JSON.stringify(frameworkUrls)
			}
		});
	},
	refs: (_, { configType }) => {
		if (configType === 'DEVELOPMENT') {
			return {
				angular: {
					title: 'Angular',
					url: 'http://localhost:6006',
					expanded: false
				},
				html: {
					title: 'HTML',
					url: 'http://localhost:6008',
					expanded: false
				},
				react: {
					title: 'React',
					url: 'http://localhost:6005',
					expanded: false
				},
				vue: {
					title: 'Vue',
					url: 'http://localhost:6007',
					expanded: false
				},
				// Storybook lowercases ref ids, so a camelCase key would be
				// emitted twice (once without a normalized id), crashing the
				// composition manager. Keep this key lowercase.
				webcomponents: {
					title: 'Web Components',
					url: 'http://localhost:6009',
					expanded: false
				}
			};
		}
		return {
			angular: {
				title: 'Angular',
				url: `${baseUrl}/angular-storybook`,
				expanded: false,
				versions: getVersions('angular-storybook')
			},
			html: {
				title: 'HTML',
				url: `${baseUrl}/html-storybook`,
				expanded: false,
				versions: getVersions('html-storybook')
			},
			react: {
				title: 'React',
				url: `${baseUrl}/react-storybook`,
				expanded: false,
				versions: getVersions('react-storybook')
			},
			vue: {
				title: 'Vue',
				url: `${baseUrl}/vue-storybook`,
				expanded: false,
				versions: getVersions('vue-storybook')
			},
			// Storybook lowercases ref ids, so a camelCase key would be
			// emitted twice (once without a normalized id), crashing the
			// composition manager. Keep this key lowercase.
			webcomponents: {
				title: 'Web Components',
				url: `${baseUrl}/stencil-storybook`,
				expanded: false,
				// The Web Components Storybook exists since v6.0.0.
				versions: getVersions('stencil-storybook', [6, 0, 0])
			}
		};
	}
};
export default config;
