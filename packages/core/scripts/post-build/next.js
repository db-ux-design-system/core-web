const Fse = require('fs-extra');
const Components = require('./components');
const Replace = require('replace-in-file');

module.exports = () => {
	Components.forEach((component) => {
		try {
			const files = [`${component.name}.tsx`, 'model.ts', 'index.ts'];

			files.forEach((file) => {
				Fse.copySync(
					`./output/react/src/components/${component.name}/${file}`,
					`./output/next/src/components/${component.name}/${file}`
				);
			});
			const options = {
				files: `./output/next/src/components/${component.name}/${component.name}.tsx`,
				from: `import "./${component.name}.scss";`,
				to: ``
			};
			Replace.replaceInFileSync(options);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	});
};
