// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

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

	const readOnlyLines = fileContent.match(/Readonly<{[\s\S]*?}>/g);
	for (const roLine of readOnlyLines) {
		const propLines = roLine.match(/(.*);/g);
		if (propLines) {
			propLines.forEach((propLine) => {
				// Check if prop(contains ": any") or function
				if (propLine.includes(': any;')) {
					const prop = propLine
						.replace('?: any;', '')
						.replace(': any;', '')
						.trim();
					// @ts-ignore
					fileContent = fileContent.replaceAll(
						propLine,
						propLine.replace('any', `${propModel}["${prop}"]`)
					);
				}
			});
		}
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
