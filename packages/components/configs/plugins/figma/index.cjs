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

	if (type === 'connectedInstances') {
		return `instance.findConnectedInstances((node) => node.hasCodeConnect()).map((child) => child.executeTemplate().example)`;
	}

	if (type === 'nestedConnectedInstances') {
		const { filter } = figmaProperty;
		return `instance.findConnectedInstances((node) => node.hasCodeConnect(), { traverseInstances: true }).filter((node) => node.type === 'INSTANCE').filter((node) => node.executeTemplate().example.some((section) => section.type === 'CODE' && section.nestedImports?.some((i) => i.includes('${filter}')))).reverse().flatMap((child) => child.executeTemplate().example)`;
	}

	if (type === 'children') {
		return `instance.getSlot('${key}')`;
	}

	if (type === 'textContent') {
		return `instance.getString('${key}')`;
	}

	if (type === 'nestedText') {
		const { layerName, key: textKey } = figmaProperty;
		return `instance.findInstance('${layerName}')?.getString('${textKey}')`;
	}

	if (type === 'connectedText') {
		const { key: textKey, index = 0 } = figmaProperty;
		return `instance.findConnectedInstances((node) => node.hasCodeConnect()).filter((node) => node.type === 'INSTANCE').filter((node) => !!node.properties['${textKey}'])[${index}]?.getString('${textKey}')`;
	}

	if (type === 'validationMessage') {
		const { key: textKey } = figmaProperty;
		return `instance.findConnectedInstances((node) => node.hasCodeConnect()).filter((node) => node.type === 'INSTANCE').filter((node) => !!node.properties['${textKey}'])[0]?.getString('${textKey}')`;
	}

	if (type === 'conditionalProp') {
		return `instance.getInstanceSwap('${key}')?.executeTemplate().example`;
	}

	if (type === 'iconSwap') {
		return `instance.getInstanceSwap('${key}')?.executeTemplate().example`;
	}

	if (type === 'boolean') {
		return `instance.getBoolean('${key}')`;
	}

	if (type === 'string' || type === 'iconSwap') {
		return `instance.getString('${key}')`;
	}

	if (type === 'enum' && value) {
		const entries = Object.entries(value);
		const allIconSwaps = entries.every(
			([, v]) => v instanceof Object && v.key && v.type === 'iconSwap'
		);

		if (allIconSwaps) {
			const [[firstFigmaVal, firstInst], ...rest] = entries;
			if (rest.length === 0) {
				return `instance.getInstanceSwap('${firstInst.key}')?.executeTemplate().example`;
			}
			const conditions = rest
				.map(
					([figmaVal, inst]) =>
						`instance.getPropertyValue('${key}') === '${figmaVal}' ? instance.getInstanceSwap('${inst.key}')`
				)
				.join(' : ');
			return `(\n\t${conditions} : instance.getInstanceSwap('${firstInst.key}')\n)?.executeTemplate().example`;
		}

		const allInstances = entries.every(
			([, v]) => v instanceof Object && v.key && v.type === 'instance'
		);

		if (allInstances) {
			const [[firstFigmaVal, firstInst], ...rest] = entries;
			if (rest.length === 0) {
				return `instance.getInstanceSwap('${firstInst.key}')?.executeTemplate()?.example`;
			}
			const conditions = rest
				.map(
					([figmaVal, inst]) =>
						`instance.getPropertyValue('${key}') === '${figmaVal}' ? instance.getInstanceSwap('${inst.key}')?.executeTemplate()?.example`
				)
				.join(' : ');
			return `(${conditions} : instance.getInstanceSwap('${firstInst.key}')?.executeTemplate()?.example)`;
		}

		const plainEntries = entries
			.filter(([, v]) => !(v instanceof Object && v.key && v.type))
			.map(([k, v]) => `  '${k}': ${JSON.stringify(v)}`)
			.join(',\n');
		return `instance.getEnum('${key}', {\n${plainEntries}\n})`;
	}

	if (type === 'instance') {
		return `instance.getInstanceSwap('${key}')?.executeTemplate()?.example`;
	}

	return `instance.getString('${key}')`;
};

const isStringType = (fProp) => {
	if (fProp.type === 'boolean' || fProp.type === 'instance') return false;
	if (
		fProp.type === 'string' ||
		fProp.type === 'textContent' ||
		fProp.type === 'nestedText' ||
		fProp.type === 'connectedText' ||
		fProp.type === 'iconSwap'
	)
		return true;
	if (fProp.type === 'enum') {
		const vals = Object.values(fProp.value || {});
		// enum-of-booleans or enum-of-instances → not a string
		if (vals.every((v) => typeof v === 'boolean')) return false;
		if (vals.every((v) => v instanceof Object && v.type === 'instance'))
			return false;
		if (vals.every((v) => v instanceof Object && v.type === 'iconSwap'))
			return true;
		return true;
	}
	return false;
};

const getExampleWithProps = (example, props, target) => {
	let result = example;

	for (const [prop, fProp] of Object.entries(props)) {
		const isSlot = fProp.type === 'children';
		const isConnectedInstances =
			fProp.type === 'connectedInstances' ||
			fProp.type === 'nestedConnectedInstances';

		// validationMessage and conditionalProp are injected via string replacement in getBatchTemplate, skip here
		if (
			fProp.type === 'validationMessage' ||
			fProp.type === 'conditionalProp'
		)
			continue;

		if (isConnectedInstances) {
			if (target === 'react') {
				result = result
					.replaceAll(`>{props.${prop}}<`, `>\${${prop}}<`)
					.replaceAll(`{props.${prop}}`, `\${${prop}}`);
				if (result.includes(`props.${prop}`)) {
					result = result.replaceAll(`props.${prop}`, `\${${prop}}`);
				}
			} else {
				result = result
					.replaceAll(
						`><ng-content></ng-content\n  ></`,
						`>\${${prop}}</`
					)
					.replaceAll(
						`><ng-content></ng-content></`,
						`>\${${prop}}</`
					)
					.replaceAll(`><slot\n  /></`, `>\${${prop}}</`)
					.replaceAll(`><slot /></`, `>\${${prop}}</`);
			}
		} else if (isSlot) {
			const isDefaultSlot = fProp.key === 'Children';
			result = result
				.replaceAll(`>{props.${prop}}<`, `>\${${prop}}<`)
				.replaceAll(`> {props.${prop}} <`, `> \${${prop}} <`)
				.replaceAll(`{props.${prop}}`, `\${${prop}}`);
			if (isDefaultSlot) {
				result = result
					.replaceAll(`><slot\n  /></`, `>\${${prop}}</`)
					.replaceAll(`><slot /></`, `>\${${prop}}</`)
					.replaceAll(
						`><ng-content></ng-content\n  ></`,
						`>\${${prop}}</`
					)
					.replaceAll(
						`><ng-content></ng-content></`,
						`>\${${prop}}</`
					);
			} else {
				result = result
					.replaceAll(
						`><slot name="${fProp.key}"\n  /></`,
						`>\${${prop}}</`
					)
					.replaceAll(
						`><slot name="${fProp.key}" /></`,
						`>\${${prop}}</`
					)
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
			const wrapped = isStringType(fProp)
				? `"\${${prop}}"`
				: `{\${${prop}}}`;
			result = result.replaceAll(`props.\n${prop}`, `props.${prop}`);
			result = result
				.replaceAll(`={props.${prop}}`, `=${wrapped}`)
				.replaceAll(`{props.${prop}}`, `\${${prop}}`)
				.replaceAll(`props.${prop}`, `\${${prop}}`);
		} else if (target === 'vue') {
			const isInstance =
				fProp.type === 'instance' ||
				(fProp.type === 'enum' &&
					Object.values(fProp.value || {}).every(
						(v) => v instanceof Object && v.type === 'instance'
					));
			result = result
				.replaceAll(`{{ props.${prop} }}`, `\${${prop}}`)
				.replaceAll(`{{ ${prop} }}`, `\${${prop}}`)
				.replaceAll(`props.${prop}`, `\${${prop}}`);
			if (isInstance) {
				result = result
					.replaceAll(
						`:${prop}="props.${prop}"`,
						`:${prop}="\${${prop}}"`
					)
					.replaceAll(`:${prop}="${prop}"`, `:${prop}="\${${prop}}"`)
					.replaceAll(`="${prop}"`, `="\${${prop}}"`)
					.replaceAll(`{{ ${prop} }}`, `\${${prop}}`);
			} else if (isStringType(fProp)) {
				result = result
					.replaceAll(
						`:${prop}="props.${prop}"`,
						`${prop}="\${${prop}}"`
					)
					.replaceAll(`:${prop}="${prop}"`, `${prop}="\${${prop}}"`)
					.replaceAll(`{{ ${prop} }}`, `\${${prop}}`);
			} else {
				result = result
					.replaceAll(
						`:${prop}="props.${prop}"`,
						`:${prop}="\${${prop}}"`
					)
					.replaceAll(`:${prop}="${prop}"`, `:${prop}="\${${prop}}"`)
					.replaceAll(`{{ ${prop} }}`, `\${${prop}}`);
			}
		} else if (target === 'angular') {
			const isInstance =
				fProp.type === 'instance' ||
				(fProp.type === 'enum' &&
					Object.values(fProp.value || {}).every(
						(v) => v instanceof Object && v.type === 'instance'
					));
			result = result
				.replaceAll(`props.${prop}()`, `\${${prop}}`)
				.replaceAll(`{{${prop}()}}`, `\${${prop}}`);
			if (isInstance) {
				result = result
					.replaceAll(
						`[${prop}]="props.${prop}()"`,
						`[${prop}]="\${${prop}}"`
					)
					.replaceAll(
						`[${prop}]="${prop}()"`,
						`[${prop}]="\${${prop}}"`
					)
					.replaceAll(`="${prop}()"`, `="\${${prop}}"`)
					.replaceAll(`{{props.${prop}()}}`, `\${${prop}}`);
			} else if (isStringType(fProp)) {
				result = result
					.replaceAll(
						`[${prop}]="props.${prop}()"`,
						`${prop}="\${${prop}}"`
					)
					.replaceAll(
						`[${prop}]="${prop}()"`,
						`${prop}="\${${prop}}"`
					)
					.replaceAll(`{{props.${prop}()}}`, `\${${prop}}`);
			} else {
				result = result
					.replaceAll(
						`[${prop}]="props.${prop}()"`,
						`[${prop}]="\${${prop}}"`
					)
					.replaceAll(
						`[${prop}]="${prop}()"`,
						`[${prop}]="\${${prop}}"`
					)
					.replaceAll(`{{props.${prop}()}}`, `\${${prop}}`);
			}
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

	// Separate validationMessage and conditionalProp entries — they need special conditional handling
	const validationMessageEntries = propEntries.filter(
		([, fProp]) => fProp.type === 'validationMessage'
	);
	const conditionalPropEntries = propEntries.filter(
		([, fProp]) => fProp.type === 'conditionalProp'
	);
	const regularPropEntries = propEntries.filter(
		([, fProp]) =>
			fProp.type !== 'validationMessage' &&
			fProp.type !== 'conditionalProp'
	);

	const propDeclarations =
		regularPropEntries.length > 0
			? regularPropEntries
					.map(
						([key, fProp]) =>
							`const ${key} = ${getInstanceCall(fProp)}`
					)
					.join('\n') + '\n'
			: '';

	// Generate: const _messageMessage = ...; let message = ''; if (_messageMessage) { ... message = `\n\t${attr}="${val}"` }
	const validationMessageDeclarations = validationMessageEntries
		.map(([propName, fProp]) => {
			const { conditionProp, map } = fProp;
			const defaultAttr = map.default || propName;
			const conditions = Object.entries(map)
				.filter(([k]) => k !== 'default')
				.map(
					([val, attr]) =>
						`\tif (${conditionProp} === '${val}') ${propName}Attr = '${attr}'`
				)
				.join('\n');
			return [
				`const _${propName}Message = ${getInstanceCall(fProp)}`,
				`let ${propName} = ''`,
				`if (_${propName}Message) {`,
				`\tlet ${propName}Attr = '${defaultAttr}'`,
				conditions,
				`\t${propName} = \`\\n\\t\\t\${${propName}Attr}="\${_${propName}Message}"\``,
				`}`
			].join('\n');
		})
		.join('\n');

	const conditionalPropDeclarations = conditionalPropEntries
		.map(([propName, fProp]) => {
			const { guardProp, attrName } = fProp;
			return [
				`const _${propName}Value = ${getInstanceCall(fProp)}`,
				`let ${propName} = ''`,
				`if (${guardProp}) {`,
				`\t${propName} = \`\\n\\t\\t${attrName}="\${_${propName}Value}"\``,
				`}`
			].join('\n');
		})
		.join('\n');

	const allDeclarations =
		[
			propDeclarations,
			validationMessageDeclarations,
			conditionalPropDeclarations
		]
			.filter(Boolean)
			.join('\n') + '\n\n';

	// Inject ${message} after the opening tag for each validationMessage prop
	let exampleWithProps = getExampleWithProps(example, props || {}, target);
	// Inject all conditional variables (validationMessage + conditionalProp) after the opening tag in one pass
	const allConditionalEntries = [
		...validationMessageEntries,
		...conditionalPropEntries
	];
	if (allConditionalEntries.length > 0) {
		const combined = allConditionalEntries
			.map(([propName]) => `\${${propName}}`)
			.join('');
		exampleWithProps = exampleWithProps
			.replace(/(<[A-Z][a-zA-Z]*)(\s)/, `$1${combined}$2`)
			.replace(/(<[a-z][a-z-]*)(\s)/, `$1${combined}$2`);
	}

	return (
		`import figma from 'figma'\n\nconst instance = figma.selectedInstance\n\n${allDeclarations}export default {\n  example: figma.code\`${exampleWithProps}\`,\n  imports: ['${importStatement}'],\n  id: figma.batch.id,\n}`
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

			if (outputFilePath && outputDir) {
				const fullPath = join(outputDir, outputFilePath);
				const jsonPath = fullPath.replace(/\.ts$/, '.json');
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
