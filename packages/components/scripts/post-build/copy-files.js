const Fse = require('fs-extra');
const Frameworks = require('./framworks');

module.exports = () => {
	for (const file of [
		'package.json',
		'angular.json',
		'tsconfig.json',
		'ng-package.json',
		'vite.config.ts'
	]) {
		for (const framework of Frameworks) {
			const resolvedFramework =
				framework === 'vue' ? `vue/vue3` : framework;
			if (
				Fse.pathExistsSync(`./overrides/${resolvedFramework}/${file}`)
			) {
				Fse.copySync(
					`./overrides/${resolvedFramework}/${file}`,
					`../../output/${resolvedFramework}/${file}`
				);
			}
		}
	}
};
