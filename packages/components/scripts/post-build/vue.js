const Replace = require('replace-in-file');
const { components } = require('./components');
const { getComponentName, runReplacements } = require('../utils');

const updateNestedComponents = (input, rootComponentName) => {
	let fileContent = input;

	for (const nestedComponent of components.filter(
		(nComp) => nComp.name !== rootComponentName
	)) {
		const nCompUpperCase = getComponentName(nestedComponent.name);
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

module.exports = (tmp) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	// Rewire imports in Playwright config
	Replace.sync({
		files: `../../${outputFolder}/vue/vue3/playwright.config.ts`,
		from: /react/g,
		to: `vue`
	});
	// Activate vue specific event handling
	Replace.sync({
		files: `../../${outputFolder}/vue/vue3/src/utils/form-components.ts`,
		from: `// VUE:`,
		to: ``
	});
	for (const component of components) {
		const componentName = component.name;
		const vueFile = `../../${outputFolder}/vue/vue3/src/components/${componentName}/${componentName}.vue`;

		try {
			// Rewire imports in Playwright component tests
			Replace.sync({
				files: `../../${outputFolder}/vue/vue3/src/components/${componentName}/${componentName}.spec.tsx`,
				from: `react`,
				to: `vue`
			});

			Replace.sync({
				files: `../../${outputFolder}/vue/vue3/src/components/${componentName}/index.ts`,
				from: `./${componentName}`,
				to: `./${componentName}.vue`
			});

			const replacements = [
				{
					from: /immediate: true,/g,
					to: 'immediate: true,\nflush: "post"'
				}
			];

			Replace.sync({
				files: vueFile,
				processor(input) {
					return updateNestedComponents(input, componentName);
				}
			});

			if (component?.config?.vue?.vModel) {
				replacements.push({
					from: 'props: [',
					to: `emits: ${JSON.stringify(
						component?.config?.vue?.vModel.map(
							(bin) => `update:${bin.modelValue}`
						)
					)},\nprops: [`
				});
			}

			runReplacements(replacements, component, 'vue', vueFile);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
