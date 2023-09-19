const Fse = require('fs-extra');
const Replace = require('replace-in-file');
const { components } = require('./components');

const updateNestedComponents = (input, rootComponentName, powerAppsFolder) => {
	let fileContent = input;
	for (const nestedComponent of components.filter(
		(nComp) => nComp.name !== rootComponentName
	)) {
		if (input.includes(`"../${nestedComponent.name}"`)) {
			fileContent = fileContent.replace(`"./${nestedComponent.name}"`);

			Fse.copySync(
				`../../output/react/src/components/${nestedComponent.name}`,
				`../../output/power-apps/${rootComponentName}/${nestedComponent.name}`,
				{
					overwrite: true,
					filter: (src) => !src.includes('spec')
				}
			);

			Fse.copySync(
				`./src/components/${nestedComponent.name}/${nestedComponent.name}.scss`,
				`../../output/power-apps/${rootComponentName}/${nestedComponent.name}/${nestedComponent.name}.scss`,
				{
					overwrite: true
				}
			);

			Replace.sync({
				files: `../../output/power-apps/${rootComponentName}/${powerAppsFolder}/index.scss`,
				from: `@use "@db-ui/foundations/build/scss/default.assets-paths" with (`,
				to: `@use "../${nestedComponent.name}/${nestedComponent.name}.scss" as *;\n@use "@db-ui/foundations/build/scss/default.assets-paths" with (`
			});

			Replace.sync({
				files: `../../output/power-apps/${rootComponentName}/${nestedComponent.name}/model.ts`,
				from: `../../shared/model`,
				to: `../shared/model`
			});

			Replace.sync({
				files: `../../output/power-apps/${rootComponentName}/${nestedComponent.name}/${nestedComponent.name}.scss`,
				from: /\.\.\/\.\.\//g,
				to: `../`
			});

			Replace.sync({
				files: `../../output/power-apps/${rootComponentName}/${nestedComponent.name}/${nestedComponent.name}.tsx`,
				from: /\.\.\/\.\.\//g,
				to: `../`
			});
		}
	}

	return fileContent;
};

module.exports = () => {
	for (const component of components) {
		try {
			const powerAppsFolder = `DB${component.name[0].toUpperCase()}${component.name.slice(
				1
			)}`;
			const cleanName = component.name.replace('-', '');
			const files = [`${component.name}.tsx`, 'model.ts'];

			Replace.sync({
				files: `../../output/react/src/components/${component.name}/${component.name}.tsx`,
				processor(input) {
					return updateNestedComponents(
						input,
						cleanName,
						powerAppsFolder
					);
				}
			});

			Fse.removeSync(`../../output/power-apps/${cleanName}/node_modules`);

			for (const file of files) {
				Fse.copySync(
					`../../output/react/src/components/${component.name}/${file}`,
					`../../output/power-apps/${cleanName}/${powerAppsFolder}/${file}`
				);
			}

			Fse.copySync(
				`./src/styles`,
				`../../output/power-apps/${cleanName}/styles`
			);

			Fse.copySync(
				`./src/components/${component.name}/${component.name}.scss`,
				`../../output/power-apps/${cleanName}/${powerAppsFolder}/${component.name}.scss`
			);

			Fse.copySync(
				`../../output/react/src/shared`,
				`../../output/power-apps/${cleanName}/shared`
			);

			Fse.copySync(
				`../../output/react/src/utils`,
				`../../output/power-apps/${cleanName}/utils`
			);

			Replace.sync({
				files: `../../output/power-apps/${cleanName}/${powerAppsFolder}/model.ts`,
				from: `../../shared/model`,
				to: `../shared/model`
			});

			Replace.sync({
				files: `../../output/power-apps/${cleanName}/${powerAppsFolder}/${component.name}.tsx`,
				from: /\.\.\/\.\.\//g,
				to: `../`
			});

			Replace.sync({
				files: `../../output/power-apps/${cleanName}/${powerAppsFolder}/${component.name}.tsx`,
				from: `import * as React from "react";`,
				to: `import * as React from "react";\nimport "./index.scss";`
			});

			Replace.sync({
				files: `../../output/power-apps/${cleanName}/${powerAppsFolder}/${component.name}.scss`,
				from: /\.\.\/\.\.\//g,
				to: `../`
			});
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
