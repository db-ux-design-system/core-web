import { replaceInFileSync } from 'replace-in-file';

import components, { Overwrite } from './components.js';

import { runReplacements } from '../utils';

export default (tmp?: boolean) => {
	const outputFolder = tmp ? 'tmp/vue/' : '';
	// Rewire imports in Playwright config
	replaceInFileSync({
		files: `../v-core-components/${outputFolder}playwright.config.ts`,
		from: /react/g,
		to: `vue`
	});
	for (const component of components) {
		const componentName = component.name;
		const vueFile = `../v-core-components/${outputFolder}src/components/${componentName}/${componentName}.vue`;

		try {
			// Rewire imports in Playwright component tests
			replaceInFileSync({
				files: `../v-core-components/${outputFolder}src/components/${componentName}/${componentName}.spec.tsx`,
				from: `react`,
				to: `vue`
			});

			// Only replace if .vue extension is not already present
			replaceInFileSync({
				files: `../v-core-components/${outputFolder}src/components/${componentName}/index.ts`,
				from: new RegExp(`\\./${componentName}'(?!\\.vue)`, 'g'),
				to: `./${componentName}.vue'`
			});

			const replacements: Overwrite[] = [
				{
					from: /immediate: true/g,
					to: 'immediate: true,\nflush: "post"'
				},
				{
					from: /:key="undefined"/g,
					to: ''
				},
				{
					from: 'className',
					to: 'props.class'
				}
			];

			/* This is a workaround for valid/invalid Messages.
			 *  If a valid/invalid message appears it will use the old this._value,
			 *  so we need to overwrite this._value with the current event.target.value.   */

			if (['select', 'textarea', 'input'].includes(componentName)) {
				replacements.push({
					from: 'if (props.onInput) {',
					to:
						'_value.value = (event.target as any).value;\n' +
						'if (props.onInput) {'
				});
			}

			if (component?.config?.vue?.vModel) {
				replacements.push({
					from: 'const props =',
					to: `const emit = defineEmits(${JSON.stringify(component?.config?.vue?.vModel.map((bin) => `update:${bin.modelValue}`))})\n\nconst props =`
				});
				replacements.push({
					from: /handleFrameworkEventVue\(\s*\(\)\s*=>\s*\{}\s*?/g,
					to: 'handleFrameworkEventVue(emit'
				});
			}

			runReplacements(replacements, component, 'vue', vueFile);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
