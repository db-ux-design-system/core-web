import { replaceInFileSync } from 'replace-in-file';

import components, { Overwrite } from './components.js';

import { runReplacements } from '../utils';
import { globSync } from 'glob';

const fixFigmaFileEndings = (outputFolder: string) => {
	const globPaths: string[] = globSync(
		`../../${outputFolder}/vue/**/*.figma.vue`,
		{
			nodir: true
		}
	).map((path) => path.replaceAll('\\', '/'));
	console.log(globPaths);
};

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	fixFigmaFileEndings(outputFolder);
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
					to: '(this as any)?.$refs.ref?.validationMessage'
				}
			];

			/* This is a workaround for valid/invalid Messages.
			 *  If a valid/invalid message appears it will use the old this._value,
			 *  so we need to overwrite this._value with the current event.target.value.   */
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
