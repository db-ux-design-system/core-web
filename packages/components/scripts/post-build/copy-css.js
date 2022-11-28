const Fse = require('fs-extra');
const Components = require('./components');
const Frameworks = require('./framworks');

module.exports = () => {
	for (const fileEnding of ['scss', 'css']) {
		for (const framework of Frameworks) {
			for (const component of Components) {
				Fse.copySync(
					`./src/components/${component.name}/${component.name}.${fileEnding}`,
					`./output/${
						framework === 'vue' ? `vue/vue3` : framework
					}/src/components/${component.name}/${
						component.name
					}.${fileEnding}`
				);
			}
		}
	}
};
