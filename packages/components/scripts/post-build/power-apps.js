const Fse = require('fs-extra');
const Replace = require('replace-in-file');
const Components = require('./components');

const updateNestedComponents = (input, rootComponentName) => {
	let fileContent = input;
	for (const nestedComponent of Components.filter(
		(nComp) => nComp.name !== rootComponentName
	)) {
		if (input.includes(`"../${nestedComponent.name}"`)) {
			fileContent = fileContent.replace(`"./${nestedComponent.name}"`);

			Fse.copySync(
				`./output/react/src/components/${nestedComponent.name}`,
				`./output/power-apps/${rootComponentName}/${nestedComponent.name}`,
				{ overwrite: true }
			);
		}
	}

	return fileContent;
};

module.exports = () => {
	for (const component of Components) {
		try {
			const powerAppsFolder = `DB${component.name[0].toUpperCase()}${component.name.slice(
				1
			)}`;
			const cleanName = component.name.replace('-', '');
			const files = [`${component.name}.tsx`, 'model.ts'];

			Replace.sync({
				files: `./output/react/src/components/${component.name}/${component.name}.tsx`,
				processor(input) {
					return updateNestedComponents(input, cleanName);
				}
			});

			Fse.removeSync(`./output/power-apps/${cleanName}/node_modules`);

			for (const file of files) {
				Fse.copySync(
					`./output/react/src/components/${component.name}/${file}`,
					`./output/power-apps/${cleanName}/${powerAppsFolder}/${file}`
				);
			}
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
