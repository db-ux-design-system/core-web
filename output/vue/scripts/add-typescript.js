import { readdirSync } from 'node:fs';
import Replace from 'replace-in-file';

const distDir = './dist/components';

const getComponentName = (componentName) =>
	componentName
		.split('-')
		.map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
		.join('');

/**
 * Props are generated like this: `readonly id?: any;`
 * We replace it with the correct type like DBMyComponent["id"]
 * @param input {string}
 * @param component {string}
 */
const replaceAnyType = (input, component) => {
	const propModel = `DB${getComponentName(component)}Props`;
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

const addTypescript = () => {
	const components = readdirSync(distDir);

	for (const component of components) {
		Replace.sync({
			files: `${distDir}/${component}/${component}.vue.d.ts`,
			processor(input) {
				return replaceAnyType(input, component);
			}
		});
	}
};

addTypescript();
