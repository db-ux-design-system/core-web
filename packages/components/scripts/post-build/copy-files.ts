import Frameworks from './frameworks';

import { cpSync, existsSync } from 'node:fs';
import { replaceInFileSync } from 'replace-in-file';
import components from './components.js';

export default () => {
	for (const { name } of components) {
		for (const framework of Frameworks) {
			// TODO: Add other frameworks after Playwright supports them in component tests
			if (framework === 'react' || framework === 'vue') {
				if (existsSync(`./src/components/${name}/${name}.spec.tsx`)) {
					cpSync(
						`./src/components/${name}/${name}.spec.tsx`,
						`../../output/${framework}/src/components/${name}/${name}.spec.tsx`
					);
					if (framework === 'vue') {
						replaceInFileSync({
							files: `../../output/${framework}/src/components/${name}/${name}.spec.tsx`,
							from: ['{/*', '*/}'],
							to: ''
						});
						replaceInFileSync({
							files: `../../output/${framework}/src/components/${name}/${name}.spec.tsx`,
							from: /\/\/ VUE:/g,
							to: ''
						});
					}
				}
				cpSync(
					`./test/playwright/boilerplate`,
					`../../output/${framework}/playwright`,
					{ recursive: true }
				);
				cpSync(
					`./test/playwright/config.ts`,
					`../../output/${framework}/playwright.config.ts`,
					{ recursive: true }
				);
			}
		}
	}
};
