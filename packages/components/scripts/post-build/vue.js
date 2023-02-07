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

module.exports = () => {
	// Rewire imports in Playwright config
	Replace.sync({
		files: `../../output/vue/vue3/playwright.config.ts`,
		from: /react/g,
		to: `vue`
	});
	for (const component of Components) {
		const vueFile = `../../output/vue/vue3/src/components/${component.name}/${component.name}.vue`;

		try {
			// Rewire imports in Playwright component tests
			Replace.sync({
				files: `../../output/vue/vue3/src/components/${component.name}/${component.name}.spec.tsx`,
				from: `react`,
				to: `vue`
			});
			Replace.sync({
				files: `../../output/vue/vue3/src/components/${component.name}/${component.name}.spec.tsx`,
				from: /new AxeBuilder/g,
				to: `new AxeBuilder.default`
			});

			Replace.sync({
				files: `../../output/vue/vue3/src/components/${component.name}/index.ts`,
				from: `./${component.name}`,
				to: `./${component.name}.vue`
			});
			Replace.sync({
				files: vueFile,
				processor(input) {
					return updateNestedComponents(input, component.name);
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

			let replacements = [
				{
					from: `_classStringToObject(str)`,
					to: '_classStringToObject(str:any)'
				},
				{
					from: `const obj = {};`,
					to: 'const obj:any = {};'
				}
			];

			if (component?.overwrites?.vue) {
				replacements = [...replacements, ...component.overwrites.vue];
			}

			if (component?.overwrites?.global) {
				replacements = [
					...replacements,
					...component.overwrites.global
				];
			}

			for (const replacement of replacements) {
				const option = {
					files: vueFile,
					from: replacement.from,
					to: replacement.to
				};
				Replace.replaceInFileSync(option);
			}
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
