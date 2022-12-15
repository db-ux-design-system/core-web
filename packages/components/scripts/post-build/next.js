const Fse = require('fs-extra');
const Replace = require('replace-in-file');
const Components = require('./components');

module.exports = () => {
	for (const component of Components) {
		try {
			const files = [`${component.name}.tsx`, 'model.ts', 'index.ts'];

			for (const file of files) {
				Fse.copySync(
					`../../output/react/src/components/${component.name}/${file}`,
					`../../output/next/src/components/${component.name}/${file}`
				);
			}

			const options = {
				files: `../../output/next/src/components/${component.name}/${component.name}.tsx`,
				from: `import "./${component.name}.scss";`,
				to: ``
			};
			Replace.replaceInFileSync(options);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
