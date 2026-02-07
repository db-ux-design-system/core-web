import Frameworks from './frameworks';

import { cpSync, existsSync, rmSync } from 'node:fs';
import { replaceInFileSync } from 'replace-in-file';
import components from './components.js';

// Mapping from Mitosis target names to package directories
const targetToPackage: Record<string, string> = {
	react: '../react-core-components',
	vue: '../v-core-components',
	angular: '../ngx-core-components',
	stencil: '../wc-core-components'
};

export default () => {
	// Move Mitosis output from target subfolder to package src folder
	// Mitosis outputs to: ../react-core-components/react/src/
	// We need it at: ../react-core-components/src/
	for (const framework of Frameworks) {
		const packageDir = targetToPackage[framework];
		const source = `${packageDir}/${framework}/src`;
		const dest = `${packageDir}/src`;
		if (existsSync(source)) {
			cpSync(source, dest, { recursive: true });
			// Remove the now-empty target subfolder
			rmSync(`${packageDir}/${framework}`, {
				recursive: true,
				force: true
			});
		}
	}

	// Then copy test files and playwright config
	for (const { name } of components) {
		for (const framework of Frameworks) {
			// TODO: Add other frameworks after Playwright supports them in component tests
			if (framework === 'react' || framework === 'vue') {
				const outputDir = targetToPackage[framework];
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
