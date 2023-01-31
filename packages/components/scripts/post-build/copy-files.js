const Fse = require('fs-extra');
const Frameworks = require('./framworks');
const components = require('./components');

module.exports = () => {
	for (const { name } of components) {
		for (const framework of Frameworks) {
			// TODO: Add other frameworks after Playwright supports them in component tests
			if (framework === 'react' || framework === 'vue') {
				const resolvedFramework =
					framework === 'vue' ? `vue/vue3` : framework;
				if (
					Fse.pathExistsSync(
						`./src/components/${name}/${name}.spec.tsx`
					)
				) {
					Fse.copySync(
						`./src/components/${name}/${name}.spec.tsx`,
						`../../output/${resolvedFramework}/src/components/${name}/${name}.spec.tsx`
					);
				}
				Fse.copySync(
					`./test/playwright/boilerplate`,
					`../../output/${resolvedFramework}/playwright`,
					{ overwrite: true }
				);
				Fse.copySync(
					`./test/playwright/config.ts`,
					`../../output/${resolvedFramework}/playwright.config.ts`,
					{ overwrite: true }
				);
			}
		}
	}
};
