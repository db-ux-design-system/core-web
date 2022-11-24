const Replace = require('replace-in-file');
const Components = require('./components');

const updateNestedComponents = (input, rootComponentName) => {
	let fileContent = input;

	Components.filter((nComp) => nComp.name !== rootComponentName).forEach(
		(nestedComponent) => {
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
	);

	return fileContent;
};

module.exports = () => {
	Components.forEach((component) => {
		const options = {
			files: `./output/vue/vue3/src/components/${component.name}/index.js`,
			from: `./${component.name}`,
			to: `./${component.name}.vue`
		};

		const nestedOptions = {
			files: `./output/vue/vue3/src/components/${component.name}/${component.name}.vue`,
			processor: (input) => {
				return updateNestedComponents(input, component.name);
			}
		};

		try {
			Replace.sync(options);
			Replace.sync(nestedOptions);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	});
};
