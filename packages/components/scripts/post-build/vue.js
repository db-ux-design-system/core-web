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
		const vueFile = `../../output/vue/vue3/src/components/${component.name}/${component.name}.vue`;

		try {
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
