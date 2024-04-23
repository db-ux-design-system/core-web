const Fse = require('fs-extra');
const Frameworks = require('./framworks');
const { components } = require('./components');
const Replace = require('replace-in-file');

module.exports = () => {
	for (const { name } of components) {
		for (const framework of Frameworks) {
			// TODO: Add other frameworks after Playwright supports them in component tests
			if (framework === 'react' || framework === 'vue') {
				if (
					Fse.pathExistsSync(
						`./src/components/${name}/${name}.spec.tsx`
					)
				) {
					Fse.copySync(
						`./src/components/${name}/${name}.spec.tsx`,
						`../../output/${framework}/src/components/${name}/${name}.spec.tsx`
					);
					if (framework === 'vue') {
						Replace({
							files: `../../output/${framework}/src/components/${name}/${name}.spec.tsx`,
							from: ['{/*', '*/}'],
							to: ''
						});
						Replace({
							files: `../../output/${framework}/src/components/${name}/${name}.spec.tsx`,
							from: /\/\/ VUE:/g,
							to: ''
						});
					}
				}
				Fse.copySync(
					`./test/playwright/boilerplate`,
					`../../output/${framework}/playwright`,
					{ overwrite: true }
				);
				Fse.copySync(
					`./test/playwright/config.ts`,
					`../../output/${framework}/playwright.config.ts`,
					{ overwrite: true }
				);
			}
		}
	}
};
