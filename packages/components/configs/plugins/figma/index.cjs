// eslint-disable-next-line unicorn/import-style
const { join } = require('node:path');
const { env, loadEnvFile } = require('node:process');
const { writeFileSync } = require('node:fs');

const envPath = join(__dirname, '..', '..', '..', '..', '..', '.env');

try {
	loadEnvFile(envPath);
} catch {
	// .env file doesn't exist, which is ok
}

const getInstanceCall = (figmaProperty) => {
	const { type, key, value } = figmaProperty;

	if (type === 'children' || type === 'textContent') {
		return `instance.getSlot('${key}')`;
	}

	if (type === 'boolean') {
		return `instance.getBoolean('${key}')`;
	}

	if (type === 'string') {
		return `instance.getString('${key}')`;
	}

	if (type === 'enum' && value) {
		const entries = Object.entries(value)
			.filter(([, v]) => !(v instanceof Object && v.key && v.type))
			.map(([k, v]) => `  '${k}': ${JSON.stringify(v)}`)
			.join(',\n');
		return `instance.getEnum('${key}', {\n${entries}\n})`;
	}

	if (type === 'instance') {
		return `instance.getInstanceSwap('${key}')`;
	}

	return `instance.getString('${key}')`;
};

const getExampleWithProps = (example, props, target) => {
	let result = example;

	for (const [prop, fProp] of Object.entries(props)) {
		const isSlot =
			fProp.type === 'children' || fProp.type === 'textContent';

		if (isSlot) {
			const isDefaultSlot = fProp.key === 'Children';
			result = result
				// React: {props.children} or >{props.children}<
				.replaceAll(`>{props.${prop}}<`, `>\${${prop}}<`)
				.replaceAll(`> {props.${prop}} <`, `> \${${prop}} <`)
				.replaceAll(`{props.${prop}}`, `\${${prop}}`);

			if (isDefaultSlot) {
				// Vue default slot
				result = result
					.replaceAll(`><slot\n  /></`, `>\${${prop}}</`)
					.replaceAll(`><slot /></`, `>\${${prop}}</`);
				// Angular default ng-content
				result = result
					.replaceAll(
						`><ng-content></ng-content\n  ></`,
						`>\${${prop}}</`
					)
					.replaceAll(
						`><ng-content></ng-content></`,
						`>\${${prop}}</`
					);
			} else {
				// Vue named slot
				result = result
					.replaceAll(
						`><slot name="${fProp.key}"\n  /></`,
						`>\${${prop}}</`
					)
					.replaceAll(
						`><slot name="${fProp.key}" /></`,
						`>\${${prop}}</`
					);
				// Angular named ng-content
				result = result
					.replaceAll(
						`><ng-content select="[${fProp.key}]"></ng-content\n  ></`,
						`>\${${prop}}</`
					)
					.replaceAll(
						`><ng-content select="[${fProp.key}]"></ng-content></`,
						`>\${${prop}}</`
					);
			}
		} else if (target === 'react') {
			// Strings/enums get "${prop}", booleans/numbers get {${prop}}
			const isStringProp =
				fProp.type === 'string' ||
				fProp.type === 'enum' ||
				fProp.type === 'textContent';
			const wrapped = isStringProp ? `"\${${prop}}"` : `{\${${prop}}}`;
			result = result
				// Replace ={props.prop} with the correctly wrapped version
				.replaceAll(`={props.${prop}}`, `=${wrapped}`)
				// Fallback for any remaining props. references
				.replaceAll(`props.${prop}`, `\${${prop}}`);
		} else if (target === 'vue') {
			result = result
				.replaceAll(`{{ props.${prop} }}`, `\${${prop}}`)
				.replaceAll(`:${prop}="props.${prop}"`, `${prop}="\${${prop}}"`)
				.replaceAll(`props.${prop}`, `\${${prop}}`)
				.replaceAll(`:${prop}="${prop}"`, `${prop}="\${${prop}}"`)
				.replaceAll(`{{ ${prop} }}`, `\${${prop}}`);
		} else if (target === 'angular') {
			// Strings/enums get "${prop}", booleans/numbers get {${prop}}
			const isStringProp =
				fProp.type === 'string' ||
				fProp.type === 'enum' ||
				fProp.type === 'textContent';
			const wrapped = isStringProp ? `"\${${prop}}"` : `{\${${prop}}}`;
			result = result
				// Mitosis Angular signals: [prop]="props.prop()" or [prop]="prop()"
				.replaceAll(`[${prop}]="props.${prop}()"`, `${prop}=${wrapped}`)
				.replaceAll(`[${prop}]="${prop}()"`, `${prop}=${wrapped}`)
				// Fallback
				.replaceAll(`props.${prop}()`, `\${${prop}}`)
				.replaceAll(`${prop}()`, `\${${prop}}`);
		} else {
			result = result.replaceAll(`props.${prop}`, `\${${prop}}`);
		}
	}

	return result;
};

const getBatchTemplate = ({ props, example, imports, target, componentId }) => {
	let libraryName = '';

	if (target === 'vue') {
		libraryName = 'v-core-components';
	} else if (target === 'angular') {
		libraryName = 'ngx-core-components';
	} else if (target === 'react') {
		libraryName = 'react-core-components';
	}

	const importStatement =
		imports && imports.length > 0
			? `import { ${imports.join(', ')} } from "@db-ux/${libraryName}"`
			: '';

	const propEntries = Object.entries(props || {});
	const propDeclarations =
		propEntries.length > 0
			? propEntries
					.map(
						([key, fProp]) =>
							`const ${key} = ${getInstanceCall(fProp)}`
					)
					.join('\n') + '\n\n'
			: '';

	const exampleWithProps = getExampleWithProps(example, props || {}, target);

	return (
		`import figma from 'figma'

const instance = figma.selectedInstance

${propDeclarations}export default {
  example: figma.code\`${exampleWithProps}\`,
  imports: ['${importStatement}'],
  id: figma.batch.id,
}`
			// Strip any non-figma imports Mitosis may have injected
			.replace(/^import\s+(?!figma)[^\n]+\n/gm, '')
	);
};

const getBatchJson = ({ urls, componentId, templateFileName }) => {
	const components = urls
		.filter((url) => url != null)
		.map((url, index) => ({
			url: String(url).replace(
				'FIGMA_FILE',
				env.FIGMA_FILE || 'FIGMA_FILE'
			),
			id: urls.length > 1 ? `${componentId}-${index}` : componentId
		}));

	return JSON.stringify(
		{
			templateFile: `./${templateFileName}`,
			components
		},
		null,
		2
	);
};

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code, json) => {
			const { pluginData } = json;
			const { target, outputFilePath, outputDir } = pluginData;

			// Skip files without figma metadata
			if (!json.meta?.useMetadata?.figma) {
				return code;
			}

			if (!env.FIGMA_FILE) {
				throw Error(
					'FIGMA_FILE not set (check .env file or environment variables)'
				);
			}

			const figmaMeta = json.meta.useMetadata.figma;

			if (!figmaMeta || typeof figmaMeta !== 'object') {
				return code;
			}

			const urls = Array.isArray(figmaMeta.urls) ? figmaMeta.urls : [];
			const props = figmaMeta.props || {};

			if (urls.length === 0) {
				return code;
			}

			let codeStart = '';
			let codeEnd = '';

			if (target === 'vue') {
				codeStart = '<template>';
				codeEnd = '</template>';
			} else if (target === 'angular') {
				codeStart = 'template: `';
				codeEnd = '`,';
			} else if (target === 'react') {
				codeStart = 'return (';
				codeEnd = '  );';
			}

			const imports = json.imports
				.filter((imp) => !imp.path.startsWith('./'))
				.reduce((prev, next) => {
					return [...prev, ...Object.keys(next.imports)];
				}, []);

			let example;
			if (target === 'react' && !code.includes('return (')) {
				// Single-line return without parentheses: return <Component .../>;
				const match = code.match(
					/return\s+(<[\s\S]*?>(?:[\s\S]*?<\/[^>]+>)?)\s*;/
				);
				example = match
					? match[1].trim()
					: code.split('return ').pop().split(';')[0].trim();
			} else {
				example = code.split(codeStart).pop().split(codeEnd)[0].trim();
			}

			const componentId = (json.name || 'component')
				.replace(/FigmaLite$/, '')
				.replace(/([a-z])([A-Z])/g, '$1-$2')
				.toLowerCase();

			// Write the .figma.batch.json next to the output .figma.batch.ts
			if (outputFilePath && outputDir) {
				const fullPath = join(outputDir, outputFilePath);
				const jsonPath = fullPath.replace(/\.ts$/, '.json');
				// Derive the template filename from the actual output file path
				const templateFileName = outputFilePath
					.split('/')
					.pop()
					.split('\\')
					.pop();
				try {
					writeFileSync(
						jsonPath,
						getBatchJson({ urls, componentId, templateFileName })
					);
				} catch (err) {
					console.error(
						`[figma plugin] Failed to write batch JSON: ${err.message}`
					);
				}
			}

			return getBatchTemplate({
				props,
				example,
				imports,
				target,
				componentId
			});
		}
	}
});
