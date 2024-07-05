import { replaceInFileSync } from 'replace-in-file';

import components, { Overwrite } from './components.js';

import { runReplacements, transformToUpperComponentName } from '../utils';

const updateNestedComponents = (input: string, rootComponentName: string) => {
	let fileContent = input;

	for (const nestedComponent of components.filter(
		(nComp) => nComp.name !== rootComponentName
	)) {
		const nCompUpperCase = transformToUpperComponentName(
			nestedComponent.name
		);
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

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	// Rewire imports in Playwright config
	replaceInFileSync({
		files: `../../${outputFolder}/vue/playwright.config.ts`,
		from: /react/g,
		to: `vue`
	});
	// Activate vue specific event handling
	replaceInFileSync({
		files: `../../${outputFolder}/vue/src/utils/form-components.ts`,
		from: `// VUE:`,
		to: ``
	});
	for (const component of components) {
		const componentName = component.name;
		const vueFile = `../../${outputFolder}/vue/src/components/${componentName}/${componentName}.vue`;

		try {
			// Rewire imports in Playwright component tests
			replaceInFileSync({
				files: `../../${outputFolder}/vue/src/components/${componentName}/${componentName}.spec.tsx`,
				from: `react`,
				to: `vue`
			});

			replaceInFileSync({
				files: `../../${outputFolder}/vue/src/components/${componentName}/index.ts`,
				from: `./${componentName}`,
				to: `./${componentName}.vue`
			});

			const replacements: Overwrite[] = [
				{
					from: /immediate: true,/g,
					to: 'immediate: true,\nflush: "post"'
				},
				/* `this` can be undefined for ssr (nuxt) we need to add */
				{
					from: /this.\$refs.ref\?.validationMessage/g,
					to: 'this?.$refs.ref?.validationMessage'
				}
			];

			// This is a workaround for valid/invalidMessages resetting values
			[
				'HTMLSelectElement',
				'HTMLInputElement',
				'HTMLTextAreaElement'
			].forEach((element) => {
				replacements.push({
					from: `handleInput(event: InputEvent<${element}>) {`,
					to:
						`handleInput(event: InputEvent<${element}>) {\n` +
						'this._value = (event.target as any).value;'
				});
			});

			replaceInFileSync({
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
