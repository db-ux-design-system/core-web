import Frameworks from './frameworks';

import { cpSync, existsSync } from 'node:fs';
import { replaceInFileSync } from 'replace-in-file';
import components from './components.js';

// Mapping from Mitosis output folder names to package directories
const outputToPackage: Record<string, string> = {
	react: '../react-core-components',
	vue: '../v-core-components',
	angular: '../ngx-core-components',
	stencil: '../wc-core-components'
};

// Mitosis output base directory (relative to packages/components)
const mitosisOutput = '../../output';

export default () => {
	// First, copy Mitosis output to package directories
	for (const framework of Frameworks) {
		const source = `${mitosisOutput}/${framework}/src`;
		const dest = `${outputToPackage[framework]}/src`;
		if (existsSync(source)) {
			cpSync(source, dest, { recursive: true });
		}
	}

	// Then copy test files and playwright config
	for (const { name } of components) {
		for (const framework of Frameworks) {
			// TODO: Add other frameworks after Playwright supports them in component tests
			if (framework === 'react' || framework === 'vue') {
				const outputDir = outputToPackage[framework];
				if (existsSync(`./src/components/${name}/${name}.spec.tsx`)) {
					cpSync(
						`./src/components/${name}/${name}.spec.tsx`,
						`${outputDir}/src/components/${name}/${name}.spec.tsx`
					);
					if (framework === 'vue') {
						replaceInFileSync({
							files: `${outputDir}/src/components/${name}/${name}.spec.tsx`,
							from: ['{/*', '*/}'],
							to: ''
						});
						replaceInFileSync({
							files: `${outputDir}/src/components/${name}/${name}.spec.tsx`,
							from: /\/\/ VUE:/g,
							to: ''
						});
					}
				}
				cpSync(
					`./test/playwright/boilerplate`,
					`${outputDir}/playwright`,
					{ recursive: true }
				);
				cpSync(
					`./test/playwright/config.ts`,
					`${outputDir}/playwright.config.ts`,
					{ recursive: true }
				);
			}
		}
	}
};
