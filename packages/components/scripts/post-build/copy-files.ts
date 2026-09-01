import Frameworks from './frameworks';

import { cpSync, existsSync } from 'node:fs';
import { replaceInFileSync } from 'replace-in-file';
import components from './components.js';

export default () => {
	for (const { name, folder, spec } of components) {
		const componentFolder = folder ?? name;
		const specName = spec ?? name;
		for (const framework of Frameworks) {
			// TODO: Add other frameworks after Playwright supports them in component tests
			if (framework === 'react' || framework === 'vue') {
				if (
					existsSync(
						`./src/components/${componentFolder}/${specName}.spec.tsx`
					)
				) {
					cpSync(
						`./src/components/${componentFolder}/${specName}.spec.tsx`,
						`../../output/${framework}/src/components/${componentFolder}/${specName}.spec.tsx`
					);
					if (framework === 'vue') {
						replaceInFileSync({
							files: `../../output/${framework}/src/components/${componentFolder}/${specName}.spec.tsx`,
							from: [/\{\/\*/g, /\*\/}/g],
							to: ''
						});
						replaceInFileSync({
							files: `../../output/${framework}/src/components/${componentFolder}/${specName}.spec.tsx`,
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
