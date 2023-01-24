const Fse = require('fs-extra');
const Components = require('./components');
const Frameworks = require('./framworks');

const styles = [
	'db-ui-components',
	'db-ui-42',
	'db-ui-42-rollup',
	'db-ui-42-webpack'
];

module.exports = () => {
	for (const fileEnding of ['scss', 'css']) {
		for (const framework of Frameworks) {
			for (const component of Components) {
				Fse.copySync(
					`./src/components/${component.name}/${component.name}.${fileEnding}`,
					`../../output/${
						framework === 'vue' ? `vue/vue3` : framework
					}/src/components/${component.name}/${
						component.name
					}.${fileEnding}`
				);
			}

			for (const style of styles) {
				Fse.copySync(
					`./src/styles/${style}.${fileEnding}`,
					`../../output/${
						framework === 'vue' ? `vue/vue3` : framework
					}/src/styles/${style}.${fileEnding}`
				);
			}
		}
	}

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
