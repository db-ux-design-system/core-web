const Components = require('./components');
const Frameworks = require('./framworks');
const Fse = require('fs-extra');

module.exports = () => {
	['scss', 'css'].forEach((fileEnding) => {
		Frameworks.forEach((framework) => {
			Components.forEach((component) => {
				Fse.copySync(
					`./src/components/${component.name}/${component.name}.${fileEnding}`,
					`./output/${
						framework === 'vue' ? `vue/vue3` : framework
					}/src/components/${component.name}/${
						component.name
					}.${fileEnding}`
				);
			});
		});
	});

	[
		'package.json',
		'angular.json',
		'tsconfig.json',
		'ng-package.json'
	].forEach((file) => {
		Frameworks.forEach((framework) => {
			if (Fse.pathExistsSync(`./overrides/${framework}/${file}`)) {
				Fse.copySync(
					`./overrides/${framework}/${file}`,
					`./output/${framework}/${file}`
				);
			}
		});
	});
};
