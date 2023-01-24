const Fse = require('fs-extra');
const Frameworks = require('./framworks');

module.exports = () => {
	[
		'package.json',
		'angular.json',
		'tsconfig.json',
		'ng-package.json',
		'vite.config.ts'
	].forEach((file) => {
		Frameworks.forEach((framework) => {
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
		});
	});
};
