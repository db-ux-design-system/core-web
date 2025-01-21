// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import Frameworks from './frameworks';

import { replaceInFileSync } from 'replace-in-file';
import components from './components.js';
import { copySync, pathExistsSync } from 'fs-extra';

export default () => {
	for (const { name } of components) {
		for (const framework of Frameworks) {
			// TODO: Add other frameworks after Playwright supports them in component tests
			if (framework === 'react' || framework === 'vue') {
				if (
					pathExistsSync(`./src/components/${name}/${name}.spec.tsx`)
				) {
					copySync(
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
				copySync(
					`./test/playwright/boilerplate`,
					`../../output/${framework}/playwright`,
					{ overwrite: true }
				);
				copySync(
					`./test/playwright/config.ts`,
					`../../output/${framework}/playwright.config.ts`,
					{ overwrite: true }
				);
			}
		}
	}
};
