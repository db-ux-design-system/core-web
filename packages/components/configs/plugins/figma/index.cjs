// eslint-disable-next-line unicorn/import-style
const { join } = require('node:path');
const { env, loadEnvFile } = require('node:process');

const envPath = join(__dirname, '..', '..', '..', '..', '..', '.env');

try {
	loadEnvFile(envPath);
} catch {
	// .env file doesn't exist, which is ok - we'll check for required vars below
}

const figmaHtmlImport =
	"import figma, { html } from '@figma/code-connect/html';";

const reactImport =
	'import figma from \'@figma/code-connect\';import React from "react";';

const getFigmaProp = (figmaProperty) => {
	let resultValue = '';
	if (figmaProperty.value) {
		resultValue += ', {';
		resultValue += Object.entries(figmaProperty.value)
			.map(([key, value]) => {
				if (value instanceof Object && value.key && value.type) {
					// This is a nested figmaProperty
					return `"${key}": ${getFigmaProp(value)}`;
				}

				return `"${key}": ${JSON.stringify(value)}`;
			})
			.join(', ');

		resultValue += '}';
	}

	return `figma.${figmaProperty.type}('${figmaProperty.key}'${resultValue})`;
};

const getProps = (props) => {
	return `props: {
	${Object.entries(props)
		.map(([key, fProp]) => {
			return `${key}: ${getFigmaProp(fProp)}`;
		})
		.join(',\n')}
	}`;
};

const propReplacement = (prop) => '${props.' + prop + '}';
const getExample = (example, props) => {
	let result = example;
	for (const prop of Object.keys(props)) {
		const replacement = propReplacement(prop);
		result = result
			.replaceAll(`"${prop}"`, `"${replacement}"`)
			// Vue
			.replaceAll(`{{ ${prop} }}`, replacement)
			.replaceAll(`:${prop}`, `${prop}`)
			// Angular
			.replaceAll(`{{${prop}()}}`, replacement)
			.replaceAll(`[${prop}]`, `${prop}`)
			.replaceAll(`${prop}()`, replacement);
	}
	return result;
};

const codeConnectTemplate = ({ props, url, example, imports, target }) => {
	let libraryName = '';
	let exampleString = `html\`${getExample(example, props)}\``;

	if (target === 'vue') {
		libraryName = 'v-core-components';
	} else if (target === 'angular') {
		libraryName = 'ngx-core-components';
	} else if (target === 'react') {
		libraryName = 'react-core-components';
		exampleString = getExample(example, props);
	}

	return `
figma.connect(
  '${url.replace('FIGMA_FILE', env.FIGMA_FILE)}',
  {
    ${getProps(props)},
    example: (props) =>${exampleString},
    imports: ["import { ${imports.join(', ')} } from '@db-ux/${libraryName}'"]
  }
);`;
};

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code, json) => {
			if (!env.FIGMA_FILE) {
				throw Error('FIGMA_FILE not set in .env');
			}

			const { pluginData, path } = json;
			const { target } = pluginData;

			let codeStart = '';
			let codeEnd = '';

			let globalImports = figmaHtmlImport;

			if (target === 'vue') {
				codeStart = '<template>';
				codeEnd = '</template>';
			} else if (target === 'angular') {
				codeStart = 'template: `';
				codeEnd = '`,';
			} else if (target === 'react') {
				codeStart = 'return (';
				codeEnd = '  );';
				globalImports = reactImport;
			}

			if (json.meta?.useMetadata?.figma) {
				const { urls, props } = json.meta.useMetadata.figma;

				const imports = json.imports
					.filter((imp) => !imp.path.startsWith('./'))
					.reduce((prev, next) => {
						const keys = Object.keys(next.imports);
						return [...prev, ...keys];
					}, []);

				const example = code
					.split(codeStart)
					.pop()
					.split(codeEnd)[0]
					.trim();

				let template = globalImports;
				for (const url of urls) {
					template += '\n';
					template += codeConnectTemplate({
						props,
						url,
						example,
						imports,
						target
					});
					template += '\n';
				}
				return template;
			} else {
				throw Error(`Missing metadata for ${path}`);
			}
		}
	}
});
