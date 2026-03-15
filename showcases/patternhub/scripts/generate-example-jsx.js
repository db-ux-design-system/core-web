import FS from 'node:fs';
import {
	generateExampleKey,
	getCodeByFramework,
	getComponentName,
	transformToUpperComponentName
} from './utils.js';

const sharedPath = '../shared';
const webTypesPath = './../../packages/wc-core-components/dist/web-types.json';

const generateExampleJSX = () => {
	let elements = [];
	if (FS.existsSync(webTypesPath)) {
		const webTypes = JSON.parse(
			FS.readFileSync(webTypesPath, 'utf8').toString()
		);
		elements = webTypes?.contributions?.html?.elements;
	}

	const imports = [];
	const examples = [];
	for (const { name } of elements) {
		if (!name.startsWith('db-')) {
			continue;
		}

		const componentName = getComponentName(name);
		imports.push(`DB${transformToUpperComponentName(componentName)}`);
		const path = `${sharedPath}/${componentName}.json`;
		if (FS.existsSync(path)) {
			const variants = JSON.parse(FS.readFileSync(path, 'utf8'));

			for (const variant of variants) {
				for (const example of variant.examples) {
					const code = getCodeByFramework(
						componentName,
						'react',
						example,
						true,
						variant.children
					);

					const exampleKey = generateExampleKey(
						componentName,
						variant.name,
						example.name
					);
					examples.push(`"${exampleKey}":renderToString(${[code]})`);
				}
			}
		}
	}

	if (!FS.existsSync('./scripts/generated')) {
		FS.mkdirSync('./scripts/generated');
	}

	FS.writeFileSync(
		`./scripts/generated/index.jsx`,
		"import { renderToString } from 'react-dom/server';\n" +
			"import React from 'react';\n" +
			`import {${imports.join(',')}} from '@db-ux/react-core-components/src';\n\n` +
			`export const allExamples = {${examples.join(',\n')}}`
	);
};

generateExampleJSX();
