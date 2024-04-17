import { readdirSync } from 'node:fs';
import Replace from 'replace-in-file';
import { transformToUpperComponentName } from '@db-ui/components/scripts/utils/index.js';

const distDir = './dist/components';

/**
 * Props are generated like this: `readonly id?: any;`
 * We replace it with the correct type like DBMyComponent["id"]
 * @param input {string}
 * @param component {string}
 */
const replaceAnyTypes = (input, component) => {
	const propModel = `DB${transformToUpperComponentName(component)}Props`;
	let fileContent = input;

	const propLines = fileContent.match(/readonly (.*);/g);
	for (const propLine of propLines) {
		const prop = propLine
			.replace('readonly ', '')
			.replace('?: any;', '')
			.replace(': any;', '');
		fileContent = fileContent.replace(
			propLine,
			propLine.replace('any', `${propModel}["${prop}"]`)
		);
	}

	return `import { ${propModel} } from "./model";\n\n${fileContent}`;
};

const fixAnyTypes = () => {
	const components = readdirSync(distDir);

	for (const component of components) {
		Replace.sync({
			files: `${distDir}/${component}/${component}.vue.d.ts`,
			processor(input) {
				return replaceAnyTypes(input, component);
			}
		});
	}
};

fixAnyTypes();
