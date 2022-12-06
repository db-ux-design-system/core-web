const Replace = require('replace-in-file');
const Fse = require('fs-extra');
const Components = require('./components');

const updateNestedComponents = (input, rootComponentName) => {
	let fileContent = input;

	for (const nestedComponent of Components.filter(
		(nComp) => nComp.name !== rootComponentName
	)) {
		const nCompUpperCase =
			nestedComponent.name.charAt(0).toUpperCase() +
			nestedComponent.name.slice(1);

		if (
			fileContent.includes(
				`import { DB${nCompUpperCase} } from "../${nestedComponent.name}";`
			)
		) {
			fileContent = fileContent.replace(
				`import { DB${nCompUpperCase} } from "../${nestedComponent.name}";`,
				`import "../${nestedComponent.name}/${nestedComponent.name}";`
			);

			while (
				fileContent.includes(`<DB${nCompUpperCase}`) ||
				fileContent.includes(`</DB${nCompUpperCase}`)
			) {
				fileContent = fileContent.replace(
					`<DB${nCompUpperCase}`,
					`<db-${nestedComponent.name}`
				);
				fileContent = fileContent.replace(
					`</DB${nCompUpperCase}`,
					`</db-${nestedComponent.name}`
				);
			}
		}
	}

	return fileContent;
};

module.exports = () => {
	for (const component of Components) {
		const fixImports = {
			files: `./output/webcomponent/src/components/${component.name}/${component.name}.ts`,
			processor(input) {
				const filteredInput = input
					.split('\n')
					.filter(
						(line) =>
							!line.includes('@db-ui') && !line.includes('.scss')
					)
					.join('\n');
				return updateNestedComponents(filteredInput, component.name);
			}
		};

		const defaultStyleUrl = {
			files: `./output/webcomponent/src/components/${component.name}/${component.name}.ts`,
			from: 'this.state = {',
			to: `this.state = {stylePath: "${component.defaultStylePath}",`
		};

		try {
			Replace.sync(fixImports);
			Replace.sync(defaultStyleUrl);
			if (
				Fse.pathExistsSync(
					`./output/webcomponent/src/components/${component.name}/${component.name}.ts`
				)
			) {
				Fse.moveSync(
					`./output/webcomponent/src/components/${component.name}/${component.name}.ts`,
					`./output/webcomponent/src/components/${component.name}/${component.name}.js`
				);
			}
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
