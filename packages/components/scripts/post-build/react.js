const Replace = require('replace-in-file');
const Components = require('./components');
const { useState } = require('react');

module.exports = () => {
	for (const component of Components) {
		try {
			const stateName = `DB${component.name[0].toUpperCase()}${component.name.slice(
				1
			)}State`;

			const stateOptions = {
				files: `./output/react/src/components/${component.name}/${component.name}.tsx`,
				from: `, ${stateName}`,
				to: ``
			};
			Replace.replaceInFileSync(stateOptions);

			const options = {
				files: `./output/react/src/components/${component.name}/${component.name}.tsx`,
				from: `useState(`,
				to: `useState<any>(`
			};
			Replace.replaceInFileSync(options);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
