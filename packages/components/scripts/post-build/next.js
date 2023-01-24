const Fse = require('fs-extra');
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
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
