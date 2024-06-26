/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */

import { readdirSync } from 'node:fs';
import { replaceInFileSync } from 'replace-in-file';

const distDir = './dist/components';

const transformToUpperComponentName = (componentName: string) =>
	componentName
		.split('-')
		.map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
		.join('');

/**
 * Props are generated like this: `readonly id?: any;`
 * We replace it with the correct type like DBMyComponent["id"]
 */
const replaceAnyTypes = (input: string, component: string) => {
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
	const components: string[] = readdirSync(distDir);

	for (const component of components) {
		replaceInFileSync({
			files: `${distDir}/${component}/${component}.vue.d.ts`,
			processor(input: string) {
				return replaceAnyTypes(input, component);
			}
		});
	}
};

fixAnyTypes();
