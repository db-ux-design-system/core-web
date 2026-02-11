const {
	blockToAngularSignals
} = require('@builder.io/mitosis/lib/generators/angular/signals/blocks.js');
const { blockToReact } = require('@builder.io/mitosis');
const {
	blockToVue
} = require('@builder.io/mitosis/lib/generators/vue/blocks.js');
/**
 * Recursively finds a component by name in the node tree
 * @param {import('@builder.io/mitosis').MitosisNode} node - Node to search
 * @param {string} componentName - Component name to find
 * @returns {import('@builder.io/mitosis').MitosisNode|null} Found component or null
 */
const findComponent = (node, componentName) => {
	if (node.name === componentName) return node;
	if (!node.children) return null;

	for (const child of node.children) {
		const found = findComponent(child, componentName);
		if (found) return found;
	}
	return null;
};

/**
 * Processes event bindings and adds them to args
 * @param {import('@builder.io/mitosis').MitosisComponent} json - MitosisComponent json
 * @param {import('@builder.io/mitosis').MitosisNode} example - Example object
 * @param {string} target - Target framework
 * @param {Array} args - Args array to populate
 */
const processBindings = (json, example, target, args) => {
	if (!example?.bindings) return;

	for (const [key, value] of Object.entries(example.bindings)) {
		if (value.type === 'spread') {
			continue;
		}

		if (key.startsWith('on')) {
			let bindingKey = key;
			if (target === 'angular') {
				bindingKey = key.replace('on', '').toLowerCase();
			}
			args.push(`"${bindingKey}": fn()`);
		} else {
			// Handle state values like `checked`
			try {
				if (target === 'angular' && value.code.endsWith('()')) {
					const replacedStateValue = value.code.replace('()', '');
					value.code = json.state[replacedStateValue].code;
				} else if (
					target === 'react' &&
					value.code.startsWith('state.')
				) {
					const replacedStateValue = value.code.replace('state.', '');
					value.code = json.state[replacedStateValue].code;
				} else if (target === 'vue' && json.state[value.code]) {
					value.code = json.state[value.code].code;
				}
			} catch (e) {
				console.error(
					`There is some issue with state values for ${json.name}`
				);
			}

			if (target === 'react' && key === 'class') {
				args.push(`"className": ${value.code}`);
			} else if (
				target === 'react' &&
				key === 'image' &&
				value.code.includes('getImage')
			) {
				// We handle getImage directly here
				args.push(
					`"${key}": ${value.code.replace('{state.getImage()}', '"/assets/images/placeholder.jpg"')}`
				);
			} else {
				args.push(`"${key}": ${value.code}`);
			}
		}
	}
};

/**
 * Generates render function based on target framework
 * @param {string} target - Target framework (react, angular, vue)
 * @param {string} componentName - Component name
 * @param {string} componentNameLowercase - Lowercase component name
 * @param {Array<string>} filteredImports - All imports
 * @param {string} exampleCode - Individual example code
 * @returns {string} Render function code
 */
const getRenderFunction = (
	target,
	componentName,
	componentNameLowercase,
	filteredImports,
	exampleCode
) => {
	if (target === 'react') {
		const replaced = exampleCode.replace(
			'properties="replace"',
			'{...properties}'
		);
		return `render: (properties: any) => (
		${replaced}
	),`;
	}

	if (target === 'angular') {
		const replaced = exampleCode.replace(
			'properties="replace"',
			'${argsToTemplate(args)}'
		);

		return `
	render: ({ children, ...args }) => ({
		props: args,
		template: \`${replaced}\`
	}),`;
	}

	if (target === 'vue') {
		let components = componentName;
		if (filteredImports.length) {
			components += `, ${filteredImports.join(',')}`;
		}
		const replaced = exampleCode.replace(
			'properties="replace"',
			'v-bind="args"'
		);

		return `
		render: (args:any) => ({
		components: { ${components} },
		setup() {
			return { args };
		},
		template: \`${replaced}\`,
	}),`;
	}
};

/**
 * Generates Storybook stories from component examples
 * @param {Object} params - Parameters object
 * @param {import('@builder.io/mitosis').MitosisComponent} params.json - MitosisComponent json
 * @param {string} params.target - Target framework (react, angular, vue)
 * @param {string} params.name - Story name
 * @param {[import('@builder.io/mitosis').MitosisNode]} params.examples - Wrapping container containing examples
 * @param {Object} params.meta - Metadata object
 * @param {string} params.componentNameLowercase - Lowercase component name
 * @param {string} params.componentName - Component name
 * @param {string} params.code - Generated example code
 * @param {Array<string>} params.allImports - All imports
 * @returns {string} Generated stories code
 */
const getStories = ({
	json,
	target,
	name,
	examples,
	meta,
	componentNameLowercase,
	componentName,
	code,
	allImports
}) => {
	const filteredImports = allImports?.filter((imp) => imp !== componentName);
	let exampleNames;
	if (meta?.useMetadata?.storybookNames) {
		exampleNames = meta.useMetadata.storybookNames.map((name) =>
			name.replace(/[^a-zA-Z0-9]/g, '')
		);
	}

	return examples
		.map((example, index) => {
			const exampleName =
				(exampleNames && exampleNames[index]) || `${name}${index}`;
			let args = [];

			const foundComponent = findComponent(example, componentName);

			if (!foundComponent) {
				throw Error(`something is wrong with: ${name}`);
			}

			processBindings(json, foundComponent, target, args);
			// Add other properties
			for (const [key, value] of Object.entries(
				foundComponent.properties
			)) {
				if (target === 'angular' && key.startsWith('data-')) {
					args.push(`"attr.${key}": "${value}"`);
				} else {
					args.push(`"${key}": "${value}"`);
				}
			}

			// Remove bindings and properties to replace them with storybook arguments
			foundComponent.properties = { properties: 'replace' };
			foundComponent.bindings = {};

			let template = '';
			if (target === 'angular') {
				template = blockToAngularSignals({
					root: json,
					json: example,
					options: {
						target,
						api: 'signals',
						state: 'inline-with-wrappers',
						preserveImports: false,
						preserveFileExtensions: false,
						visuallyIgnoreHostElement: true,
						defaultExportComponents: false,
						typescript: true
					},
					blockOptions: {
						childComponents: allImports
					}
				});
			} else if (target === 'react') {
				template = blockToReact(
					example,
					{
						typescript: true,
						stateType: 'useState',
						stylesType: 'styled-jsx'
					},
					json,
					true,
					[]
				);
			} else if (target === 'vue') {
				template = blockToVue(
					example,
					{
						target,
						api: 'composition',
						defineComponent: true,
						casing: 'pascal'
					},
					{ isRootNode: true }
				);
			}
			template.replaceAll('\n', '').replaceAll('\t', '');

			if (template.includes('getImage')) {
				template = template
					.replaceAll(':src="getImage()"', 'src="getImage"')
					.replaceAll('src={getImage()}', 'src="getImage"')
					.replaceAll('[attr.src]="getImage()"', 'src="getImage"')
					.replaceAll('getImage', '/assets/images/placeholder.jpg');
			}

			const render = getRenderFunction(
				target,
				componentName,
				componentNameLowercase,
				filteredImports,
				template
			);

			return `export const ${exampleName}: Story = {
	args: {
	${args.join(',\n')}
	},
	${render}
};`;
		})
		.join('\n');
};

module.exports = { getStories };
