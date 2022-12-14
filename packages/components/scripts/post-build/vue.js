const Replace = require('replace-in-file');
const Components = require('./components');

const updateNestedComponents = (input, rootComponentName) => {
	let fileContent = input;

	for (const nestedComponent of Components.filter(
		(nComp) => nComp.name !== rootComponentName
	)) {
		const nCompUpperCase =
			nestedComponent.name.charAt(0).toUpperCase() +
			nestedComponent.name.slice(1);
		while (fileContent.includes(`db${nestedComponent.name}`)) {
			fileContent = fileContent.replace(
				`db${nestedComponent.name}`,
				`DB${nCompUpperCase}`
			);
		}
	}

	return fileContent
		.split('\n')
		.filter((line) => !line.includes('import type'))
		.join('\n');
};

module.exports = () => {
	for (const component of Components) {
		const options = {
			files: `../../output/vue/vue3/src/components/${component.name}/index.ts`,
			from: `./${component.name}`,
			to: `./${component.name}.vue`
		};

		const nestedOptions = {
			files: `../../output/vue/vue3/src/components/${component.name}/${component.name}.vue`,
			processor(input) {
				return updateNestedComponents(input, component.name);
			}
		};

		try {
			Replace.sync(options);
			Replace.sync(nestedOptions);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
