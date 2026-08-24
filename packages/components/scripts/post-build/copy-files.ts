import Frameworks from './frameworks';

import { cpSync, globSync } from 'node:fs';
import { basename } from 'node:path';
import { replaceInFileSync } from 'replace-in-file';
import components from './components.js';

export default () => {
	for (const { name } of components) {
		for (const framework of Frameworks) {
			// TODO: Add other frameworks after Playwright supports them in component tests
			if (framework === 'react' || framework === 'vue') {
				/* Every `*.spec.tsx` inside the component folder is a Playwright
				 * component test, not only `${name}.spec.tsx`, so a component may
				 * split its tests over several spec files. */
				for (const specFile of globSync(
					`./src/components/${name}/*.spec.tsx`
				)) {
					const outputFile = `../../output/${framework}/src/components/${name}/${basename(specFile)}`;
					cpSync(specFile, outputFile);
					if (framework === 'vue') {
						replaceInFileSync({
							files: outputFile,
							from: [/\{\/\*/g, /\*\/}/g],
							to: ''
						});
						replaceInFileSync({
							files: outputFile,
							from: /\/\/ VUE:/g,
							to: ''
						});
						// Rewire imports in Playwright component tests
						replaceInFileSync({
							files: outputFile,
							from: `react`,
							to: `vue`
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
