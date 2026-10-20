import components, { Overwrite } from './components.js';

import { runReplacements } from '../utils';

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const componentFolder = component.folder ?? componentName;
		const vueFile = `../../${outputFolder}/vue/src/components/${componentFolder}/${componentName}.vue`;

		try {
			const replacements: Overwrite[] = [
				{
					from: /immediate: true/g,
					to: 'immediate: true,\nflush: "post"'
				},
				{
					from: /:key="undefined"/g,
					to: ''
				},
				/* Mitosis emits the shared `className` prop into the Vue template,
				 * where `class` is the idiomatic name. Vue consumes a declared
				 * `className` as a prop instead of letting it fall through as an
				 * attribute, so reading only `props.class` would silently drop it.
				 * Accepting both keeps `className` working as the models promise it
				 * for every component, not just the few that used to patch this
				 * replacement afterwards. Applied once, to the template occurrence. */
				{
					from: 'className',
					to: 'props.className ?? props.class'
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
