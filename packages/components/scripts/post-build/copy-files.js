const Fse = require('fs-extra');
const Frameworks = require('./framworks');
const components = require('./components');

module.exports = () => {
	for (const { name } of components) {
		for (const framework of Frameworks) {
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
			}
		}
	}
};
