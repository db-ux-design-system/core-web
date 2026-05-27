// eslint-disable-next-line unicorn/import-style
const { join, dirname } = require('node:path');
const { env, loadEnvFile } = require('node:process');
const { writeFileSync, mkdirSync } = require('node:fs');

const envPath = join(__dirname, '..', '..', '..', '..', '..', '.env');

try {
	loadEnvFile(envPath);
} catch {
	// .env file doesn't exist, which is ok
}

const UNSAFE_JS_CHAR_MAP = {
	'<': '\\u003C',
	'>': '\\u003E',
	'/': '\\u002F',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\0': '\\0',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029'
};
const escapeUnsafeChars = (str) =>
	str.replace(
		/[<>/\\\b\f\n\r\t\0\u2028\u2029]/g,
		(ch) => UNSAFE_JS_CHAR_MAP[ch]
	);

// Prop types that are slot/children content - kept in bindings, used directly in template
const SLOT_TYPES = new Set([
	'children',
	'textContent',
	'connectedInstances',
	'nestedConnectedInstances',
	'connectedText',
	'nestedText',
	'validationMessage',
	'conditionalProp'
]);

const getInstanceCall = (figmaProperty) => {
	const { type, key, value } = figmaProperty;

	if (type === 'connectedInstances') {
		return `instance.findConnectedInstances((node) => node.hasCodeConnect()).map((child) => child.executeTemplate().example)`;
	}
	if (type === 'nestedConnectedInstances') {
		const { filter } = figmaProperty;
		const filterStep = filter
			? `.filter((node) => node.executeTemplate().example.some((section) => section.type === 'CODE' && section.nestedImports?.some((i) => i.includes('${filter}'))))`
			: '';
		const reverseStep = filter ? '.reverse()' : '';
		return `instance.findConnectedInstances((node) => node.hasCodeConnect(), { traverseInstances: true }).filter((node) => node.type === 'INSTANCE')${filterStep}${reverseStep}.flatMap((child) => child.executeTemplate().example)`;
	}
	if (type === 'children') return `instance.getSlot(_findKey('${key}'))`;
	if (type === 'textContent') return `instance.getString(_findKey('${key}'))`;
	if (type === 'nestedText') {
		const { layerName, key: textKey } = figmaProperty;
		return `instance.findInstance('${layerName}')?.getString(_findKey('${textKey}'))`;
	}
	if (type === 'connectedText') {
		const { key: textKey, index = 0 } = figmaProperty;
		return `instance.findConnectedInstances((node) => node.hasCodeConnect()).filter((node) => node.type === 'INSTANCE').filter((node) => !!node.properties[_findKey('${textKey}')])[${index}]?.getString(_findKey('${textKey}'))`;
	}
	if (type === 'validationMessage') {
		const { key: textKey } = figmaProperty;
		return `((n) => n?.getString(Object.keys(n.properties).find((k) => k === '${textKey}' || k.replace(/^[^a-zA-Z]+/, '') === '${textKey}') ?? '${textKey}'))(instance.findConnectedInstances((node) => node.hasCodeConnect()).filter((node) => node.type === 'INSTANCE').find((node) => !!Object.keys(node.properties).find((k) => k === '${textKey}' || k.replace(/^[^a-zA-Z]+/, '') === '${textKey}')))`;
	}
	if (type === 'conditionalProp')
		return `((r) => r && r[0]?.type === 'CODE' ? r[0].code : undefined)(instance.getInstanceSwap(_findKey('${key}'))?.executeTemplate()?.example)`;
	if (type === 'iconSwap')
		return `((r) => r && r[0]?.type === 'CODE' ? r[0].code : undefined)(instance.getInstanceSwap(_findKey('${key}'))?.executeTemplate()?.example)`;
	if (type === 'boolean')
		return `(instance.getEnum(_findKey('${key}'), { 'False': false, 'True': true }) ?? instance.getBoolean(_findKey('${key}')))`;
	if (type === 'string') return `instance.getString(_findKey('${key}'))`;

	if (type === 'enum' && value) {
		const entries = Object.entries(value);
		const allIconSwaps = entries.every(
			([, v]) => v instanceof Object && v.key && v.type === 'iconSwap'
		);
		if (allIconSwaps) {
			const { guardKey } = figmaProperty;
			// Build per-entry swap lines
			const swapLines = entries.map(
				([figmaVal, inst]) =>
					`if (instance.getPropertyValue(_findKey('${key}')) === '${figmaVal}' && typeof instance.getPropertyValue(_findKey('${inst.key}')) === 'string') { _swap = instance.getInstanceSwap(_findKey('${inst.key}')); }`
			);
			const guardOpen = guardKey
				? `if (instance.getPropertyValue(_findKey('${guardKey}')) === true || instance.getPropertyValue(_findKey('${guardKey}')) === 'True') {`
				: null;
			// Return a multi-line block marker — handled in attrDeclarations
			return { __iconSwapBlock__: true, swapLines, guardOpen };
		}
		const allInstances = entries.every(
			([, v]) => v instanceof Object && v.key && v.type === 'instance'
		);
		if (allInstances) {
			const [[, firstInst], ...rest] = entries;
			if (rest.length === 0)
				return `instance.getInstanceSwap('${firstInst.key}')?.executeTemplate()?.example`;
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
		return `instance.getEnum(_findKey('${key}'), {\n${plainEntries}\n})`;
	}

	if (type === 'instance')
		return `instance.getInstanceSwap(_findKey('${key}'))?.executeTemplate()?.example`;
	return `instance.getString(_findKey('${key}'))`;
};

const isStringType = (fProp) => {
	if (fProp.type === 'boolean' || fProp.type === 'instance') return false;
	if (
		[
			'string',
			'textContent',
			'nestedText',
			'connectedText',
			'iconSwap'
		].includes(fProp.type)
	)
		return true;
	if (fProp.type === 'enum') {
		const vals = Object.values(fProp.value || {});
		if (vals.every((v) => typeof v === 'boolean')) return false;
		if (vals.every((v) => v instanceof Object && v.type === 'instance'))
			return false;
		if (vals.every((v) => v instanceof Object && v.type === 'iconSwap'))
			return true;
		return true;
	}
	return false;
};

const buildTemplate = (json, target) => {
	const figmaMeta = json.meta.useMetadata.figma;
	const props = figmaMeta.props || {};
	const urls = figmaMeta.urls || [];

	let libraryName = '';
	if (target === 'vue') libraryName = 'v-core-components';
	else if (target === 'angular') libraryName = 'ngx-core-components';
	else if (target === 'react') libraryName = 'react-core-components';

	const imports = json.imports
		.filter((imp) => !imp.path.startsWith('./'))
		.reduce((prev, next) => [...prev, ...Object.keys(next.imports)], []);

	const importStatement =
		imports.length > 0
			? `import { ${imports.join(', ')} } from "@db-ux/${libraryName}"`
			: '';

	const propEntries = Object.entries(props);
	const validationMessageEntries = propEntries.filter(
		([, p]) => p.type === 'validationMessage'
	);
	const conditionalPropEntries = propEntries.filter(
		([, p]) => p.type === 'conditionalProp'
	);
	const slotPropEntries = propEntries.filter(
		([, p]) =>
			SLOT_TYPES.has(p.type) &&
			p.type !== 'validationMessage' &&
			p.type !== 'conditionalProp'
	);
	const attrPropEntries = propEntries.filter(
		([, p]) => !SLOT_TYPES.has(p.type)
	);

	const slotDeclarations =
		slotPropEntries.length > 0
			? slotPropEntries
					.map(([k, p]) => `const ${k} = ${getInstanceCall(p)}`)
					.join('\n') + '\n'
			: '';

	const attrDeclarations = attrPropEntries
		.map(([propName, fProp]) => {
			const figmaKey = fProp.key || null;
			const valueExpr = getInstanceCall(fProp);
			// allIconSwaps generates a block object instead of an inline expression
			if (
				valueExpr &&
				typeof valueExpr === 'object' &&
				valueExpr.__iconSwapBlock__
			) {
				const { swapLines, guardOpen } = valueExpr;
				const isStr = true; // icon names are strings
				const attrStr = isStr
					? `\`\\n\\t\\t${propName}="\${_${propName}}"\``
					: `\`\\n\\t\\t${propName}={\${_${propName}}}\``;
				const innerLines = [
					`let _swap_${propName}: figma.InstanceHandle | undefined`,
					...swapLines.map((l) =>
						l.replace(/_swap/g, `_swap_${propName}`)
					),
					`const _${propName}Example = _swap_${propName}?.executeTemplate()?.example`,
					`const _${propName} = Array.isArray(_${propName}Example) ? _${propName}Example.find((section) => section.type === 'CODE')?.code : undefined`
				];
				const lines = [`let ${propName} = ''`];
				if (guardOpen) {
					lines.push(guardOpen);
					for (const l of innerLines) lines.push(`\t${l}`);
					lines.push(
						`\tif (_${propName} !== undefined && _${propName} !== null) {`
					);
					lines.push(`\t\t${propName} = ${attrStr}`);
					lines.push(`\t}`);
					lines.push(`}`);
				} else {
					for (const l of innerLines) lines.push(l);
					lines.push(
						`if (_${propName} !== undefined && _${propName} !== null) {`
					);
					lines.push(`\t${propName} = ${attrStr}`);
					lines.push(`}`);
				}
				return lines.join('\n');
			}
			const isStr = isStringType(fProp);
			let attrStr;
			if (isStr) {
				attrStr = `\`\\n\\t\\t${propName}="\${_${propName}}"\``;
			} else if (target === 'react') {
				attrStr = `\`\\n\\t\\t${propName}={\${_${propName}}}\``;
			} else if (target === 'angular') {
				attrStr = `\`\\n\\t\\t[${propName}]="\${_${propName}}"\``;
			} else if (target === 'vue') {
				attrStr = `\`\\n\\t\\t:${propName}="\${_${propName}}"\``;
			} else {
				attrStr = `\`\\n\\t\\t${propName}={\${_${propName}}}\``;
			}
			const ccChild = `_ccLayers.flatMap((l) => l.children).find((c) => c.type === 'INSTANCE' && c.name.includes('${figmaKey}')) as figma.InstanceHandle | undefined`;
			const ccRawValue = `Object.values((_cc_${propName} as figma.InstanceHandle)?.properties ?? {})[0]?.value`;
			// allIconSwaps / allInstances enums can't be resolved from a CC child value
			const enumVals =
				fProp.type === 'enum' ? Object.values(fProp.value ?? {}) : [];
			const isIconSwapEnum =
				enumVals.length > 0 &&
				enumVals.every(
					(v) => v instanceof Object && v.type === 'iconSwap'
				);
			const isInstanceEnum =
				enumVals.length > 0 &&
				enumVals.every(
					(v) => v instanceof Object && v.type === 'instance'
				);
			const skipCcFallback = isIconSwapEnum || isInstanceEnum;
			const ccValueMap =
				fProp.type === 'boolean'
					? { False: false, True: true }
					: (fProp.value ?? {});
			const ccValueMapSerialized = escapeUnsafeChars(
				JSON.stringify(ccValueMap)
			);
			const ccMappedValue =
				fProp.type === 'enum' || fProp.type === 'boolean'
					? `((v) => { const s = String(v); return ((${ccValueMapSerialized} as Record<string, unknown>)[s] ?? (${ccValueMapSerialized} as Record<string, unknown>)[s.charAt(0).toUpperCase() + s.slice(1)]) as string | boolean | undefined; })(${ccRawValue})`
					: `${ccRawValue} as string | undefined`;
			return [
				...(!skipCcFallback
					? [`const _cc_${propName} = ${ccChild}`]
					: []),
				`const _${propName} = ['string', 'boolean'].includes(typeof instance.getPropertyValue(_findKey('${figmaKey}'))) ? ${valueExpr}${skipCcFallback ? '' : ` : _cc_${propName} ? ${ccMappedValue}`} : undefined`,
				`let ${propName} = ''`,
				`if (_${propName} !== undefined && _${propName} !== null && String(_${propName}) !== 'undefined') {`,
				`\t${propName} = ${attrStr}`,
				`}`
			].join('\n');
		})
		.join('\n');

	// FIX: use _${conditionProp} (raw value) not ${conditionProp} (fragment string)
	const validationMessageDeclarations = validationMessageEntries
		.map(([propName, fProp]) => {
			const { conditionProp, map } = fProp;
			const defaultAttr = map.default || propName;
			const conditions = Object.entries(map)
				.filter(([k]) => k !== 'default')
				.map(
					([val, attr]) =>
						`\tif (_${conditionProp} === '${val}') ${propName}Attr = '${attr}'`
				)
				.join('\n');
			const attrAssign =
				target === 'angular'
					? `\t${propName} = \`\\n\\t\\t[\${${propName}Attr}]="\${_${propName}Message}"\``
					: target === 'vue'
						? `\t${propName} = \`\\n\\t\\t:\${${propName}Attr}="\${_${propName}Message}"\``
						: `\t${propName} = \`\\n\\t\\t\${${propName}Attr}="\${_${propName}Message}"\``;
			return [
				`const _${propName}Message = ${getInstanceCall(fProp)}`,
				`let ${propName} = ''`,
				`if (_${propName}Message) {`,
				`\tlet ${propName}Attr = '${defaultAttr}'`,
				conditions,
				attrAssign,
				`}`
			].join('\n');
		})
		.join('\n');

	// conditionalProp: single icon swap guarded by a Figma boolean property key
	const conditionalPropDeclarations = conditionalPropEntries
		.map(([propName, fProp]) => {
			const { guardKey, attrName } = fProp;
			const attrAssign =
				target === 'angular'
					? `\t${propName} = \`\\n\\t\\t[${attrName}]="\${_${propName}Value}"\``
					: target === 'vue'
						? `\t${propName} = \`\\n\\t\\t:${attrName}="\${_${propName}Value}"\``
						: `\t${propName} = \`\\n\\t\\t${attrName}="\${_${propName}Value}"\``;
			return [
				`const _${propName}Value = ${getInstanceCall(fProp)}`,
				`let ${propName} = ''`,
				`if ((instance.getPropertyValue(_findKey('${guardKey}')) === true || instance.getPropertyValue(_findKey('${guardKey}')) === 'True') && _${propName}Value !== undefined && _${propName}Value !== null) {`,
				attrAssign,
				`}`
			].join('\n');
		})
		.join('\n');

	const allDeclarations =
		[
			slotDeclarations,
			attrDeclarations,
			validationMessageDeclarations,
			conditionalPropDeclarations
		]
			.filter(Boolean)
			.join('\n') + '\n\n';

	figmaMeta._precomputed = {
		allDeclarations,
		importStatement,
		attrPropEntries,
		validationMessageEntries,
		conditionalPropEntries,
		slotPropEntries,
		props,
		urls
	};
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
		{ templateFile: `./${templateFileName}`, components },
		null,
		2
	);
};

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	json: {
		pre: (json) => {
			if (!json.meta?.useMetadata?.figma) return json;

			if (!env.FIGMA_FILE) {
				throw Error(
					'FIGMA_FILE not set (check .env file or environment variables)'
				);
			}

			const figmaMeta = json.meta.useMetadata.figma;
			if (!figmaMeta || typeof figmaMeta !== 'object') return json;
			if (!Array.isArray(figmaMeta.urls) || figmaMeta.urls.length === 0)
				return json;

			const figmaProps = figmaMeta.props || {};
			const target = json.pluginData?.target;

			// FIX: always recurse into children even when node has no bindings
			const walkNode = (node) => {
				if (node.bindings) {
					for (const [bindingKey, binding] of Object.entries(
						node.bindings
					)) {
						const match =
							binding.code && binding.code.match(/^props\.(.+)$/);

						if (!match) {
							// Complex JSX binding — simplify textContent props to bare variable
							if (binding.code) {
								for (const [propName, fProp] of Object.entries(
									figmaProps
								)) {
									if (
										fProp.type === 'textContent' &&
										binding.code.includes(
											'props.' + propName
										)
									) {
										node.bindings[bindingKey] = {
											...binding,
											code: propName
										};
										break;
									}
								}
							}
							continue;
						}

						const fProp = figmaProps[match[1]];
						if (!fProp || SLOT_TYPES.has(fProp.type)) continue;
						delete node.bindings[bindingKey];
					}
				}

				// Replace slot child nodes with bare variable references
				if (node.children) {
					node.children = node.children.map((child) => {
						const textBinding = child.bindings?._text;
						if (textBinding) {
							const match =
								textBinding.code &&
								textBinding.code.match(/^props\.(.+)$/);
							if (match) {
								const propName = match[1];
								const fProp = figmaProps[propName];
								if (fProp && SLOT_TYPES.has(fProp.type)) {
									return {
										'@type': '@builder.io/mitosis/node',
										name: 'div',
										meta: {},
										scope: {},
										properties: {},
										bindings: {
											_text: {
												code: propName,
												bindingType: 'expression',
												type: 'single'
											}
										},
										children: []
									};
								}
							}
						}
						walkNode(child);
						return child;
					});
				}
			};

			json.children.forEach(walkNode);

			if (target) buildTemplate(json, target);

			return json;
		}
	},
	code: {
		post: (code, json) => {
			// FIX: guard pluginData before destructuring
			if (!json.pluginData) return code;
			const { target, outputFilePath, outputDir } = json.pluginData;

			if (!json.meta?.useMetadata?.figma) return code;

			const figmaMeta = json.meta.useMetadata.figma;
			if (!figmaMeta?._precomputed) return code;

			const {
				allDeclarations,
				importStatement,
				attrPropEntries,
				validationMessageEntries,
				conditionalPropEntries,
				props,
				urls
			} = figmaMeta._precomputed;

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

			let exampleWithProps = example;

			// Replace framework-specific slot rendering with ${propName}
			for (const [propName, fProp] of Object.entries(props)) {
				if (
					!SLOT_TYPES.has(fProp.type) ||
					fProp.type === 'validationMessage' ||
					fProp.type === 'conditionalProp'
				)
					continue;
				const token = '${' + propName + '}';
				const fn = () => token;
				exampleWithProps = exampleWithProps
					.replace(
						new RegExp('\\{\\{\\s*' + propName + '\\s*\\}\\}', 'g'),
						fn
					)
					.replace(
						new RegExp(
							'\\{\\{\\s*' + propName + '\\(\\)\\s*\\}\\}',
							'g'
						),
						fn
					)
					.replace(
						new RegExp('(?<!\\$)\\{' + propName + '\\}', 'g'),
						fn
					)
					.split('props.' + propName)
					.join(token)
					.split('{' + token + '}')
					.join(token);
			}

			// Inject all conditional variables after the opening tag
			const allInjectedEntries = [
				...attrPropEntries,
				...validationMessageEntries,
				...conditionalPropEntries
			];
			if (allInjectedEntries.length > 0) {
				const combined = allInjectedEntries
					.map(([propName]) => '${' + propName + '}')
					.join('');
				exampleWithProps = exampleWithProps
					.replace(/(<[A-Z][a-zA-Z]*)([ >])/, '$1' + combined + '$2')
					.replace(/(<db-[a-z-]*)([ >])/, '$1' + combined + '$2');
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
					mkdirSync(dirname(jsonPath), { recursive: true });
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

			// FIX: only include imports entry when non-empty
			const importsEntry = importStatement ? `'${importStatement}'` : '';
			const importsArray = importsEntry ? `[${importsEntry}]` : '[]';

			return (
				"import figma from 'figma'\n\nconst instance = figma.selectedInstance\nconst _ccLayers = instance.findLayers((n) => n.type === 'INSTANCE' && n.name.includes('\u2699\ufe0f Code Connect'), { traverseInstances: true }).filter((n) => n.type === 'INSTANCE') as figma.InstanceHandle[]\nconst _findKey = (name: string) => Object.keys(instance.properties).find((k) => k === name || k.replace(/^[^a-zA-Z]+/, '') === name) ?? name\n\n" +
				allDeclarations +
				'export default {\n  example: figma.code`' +
				exampleWithProps +
				'`,\n  imports: ' +
				importsArray +
				',\n  id: figma.batch.id,\n}'
			).replace(/^import\s+(?!figma)[^\n]+\n/gm, '');
		}
	}
});
