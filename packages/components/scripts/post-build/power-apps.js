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

			Replace.sync({
				files: `./output/power-apps/${rootComponentName}/${nestedComponent.name}/model.ts`,
				from: `../../shared/model`,
				to: `../shared/model`
			});
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
			const files = [
				`${component.name}.tsx`,
				`${component.name}.scss`,
				'model.ts'
			];

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

			Fse.copySync(
				`./output/react/src/shared/model.ts`,
				`./output/power-apps/${cleanName}/shared/model.ts`
			);

			Replace.sync({
				files: `./output/power-apps/${cleanName}/${powerAppsFolder}/model.ts`,
				from: `../../shared/model`,
				to: `../shared/model`
			});

			Replace.sync({
				files: `./output/power-apps/${cleanName}/${powerAppsFolder}/${component.name}.tsx`,
				from: `import * as React from "react";`,
				to: `import * as React from "react";\nimport "./index.scss";`
			});
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
