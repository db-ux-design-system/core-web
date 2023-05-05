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

/**
 *
 * @param input {string}
 * @param bindings {{modelValue:string, binding:string}[]}
 * @returns {*}
 */
const updateVModelBindings = (input, bindings) => {
	let fileContent = input;

	// Replace internal underscore value
	bindings.forEach((bin) => {
		fileContent = fileContent.replace(
			`${bin.binding}="_${bin.modelValue}"`,
			`${bin.binding}="${bin.modelValue}"`
		);
	});

	// Add emits to component config

	fileContent = fileContent.replace(
		'props: [',
		`emits: ${JSON.stringify(
			bindings.map((bin) => `update:${bin.modelValue}`)
		)},\nprops: [`
	);

	return fileContent
		.split('\n')
		.map((line) => {
			const foundBinding = bindings.find(
				(bin) =>
					line.includes(`this._${bin.modelValue} =`) &&
					!line.includes(
						`this._${bin.modelValue} = this.${bin.modelValue}`
					)
			);
			if (foundBinding) {
				const emitFunction = `this.$emit("update:${foundBinding.modelValue}", this._${foundBinding.modelValue});`;
				return `${line}\n${emitFunction}`;
			}

			return line;
		})
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
				files: `../../${outputFolder}/vue/vue3/src/components/${componentName}/${componentName}.spec.tsx`,
				from: /new AxeBuilder/g,
				to: `new AxeBuilder.default`
			});

			Replace.sync({
				files: `../../${outputFolder}/vue/vue3/src/components/${componentName}/index.ts`,
				from: `./${componentName}`,
				to: `./${componentName}.vue`
			});
			Replace.sync({
				files: vueFile,
				processor(input) {
					return updateNestedComponents(input, componentName);
				}
			});

			if (component?.config?.vue?.vModel) {
				Replace.sync({
					files: vueFile,
					processor(input) {
						return updateVModelBindings(
							input,
							component.config.vue.vModel
						);
					}
				});
			}

			runReplacements([], component, 'vue', vueFile);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
