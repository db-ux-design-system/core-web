const { getSlotKey } = require('../utils.cjs');
/**
 * Processes event bindings and adds them to args
 * @param {import('@builder.io/mitosis').MitosisComponent} json - MitosisComponent json
 * @param {Object} example - Example object
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
				throw `There is some issue with state values for ${json.name}`;
			}

			if (target === 'react' && key === 'class') {
				args.push(`"className": ${value.code}`);
			} else {
				args.push(`"${key}": ${value.code}`);
			}
		}
	}
};

/**
 * Processes children and extracts decorators and text content
 * @param {Object} example - Example object
 * @param {string} target - Target framework
 * @param {string} componentNameLowercase - Lowercase component name
 * @param {string} componentName - Component name
 * @param {Array} args - Args array to populate
 * @param {string} code - Generated example code
 * @param {number} index - Index of example
 * @returns {{changedExample: Object, decorators: string}} Decorators code and changed example
 */
const processChildren = (
	example,
	target,
	componentNameLowercase,
	componentName,
	args,
	code,
	index
) => {
	let decorators = '';
	let changedExample = example;

	let firstChild = example.children[0];
	let foundComponent = example.children.find(
		({ name }) => name === componentName
	);
	if (firstChild) {
		// Handle wrapper div with styles
		if (example.bindings?.style) {
			const nonReactStyles = example.bindings?.style?.code
				.replaceAll('{', '')
				.replaceAll('}', '')
				.replaceAll("'", '')
				.replaceAll('\n', '')
				.split(',')
				.map((style) => {
					const splitStyle = style.split(':');
					return `${getSlotKey(splitStyle[0])}:${splitStyle[1].trim()}`;
				})
				.join(';');
			if (target === 'vue') {
				decorators = `decorators: [() => ({ template: \`<div style="${nonReactStyles}"><story /></div>\` })],`;
			} else if (target === 'angular') {
				const storyString = '${story}';
				decorators = `decorators: [componentWrapperDecorator((story) => \`<div style="${nonReactStyles}">${storyString}</div>\`)]`;
			} else if (target === 'react') {
				decorators = `decorators:[ (Story) => (
      <div style={${example.bindings?.style?.code}}>
        <Story />
      </div>
    )]`;
			}
		}
	}

	if (foundComponent) {
		changedExample = foundComponent;
		firstChild = foundComponent.children[0];
	}

	const childKey = target === 'vue' ? 'default' : 'children';
	// Extract text content
	if (
		firstChild &&
		firstChild.name === 'div' &&
		firstChild.properties['_text']
	) {
		args.push(`${childKey}: "${firstChild.properties['_text'].trim()}"`);
	} else if (firstChild) {
		// We have some other children we add them as they are

		let wrappedChildren = '';

		const tagName =
			target === 'angular'
				? `db-${componentNameLowercase}`
				: componentName;
		const openTag = `<${tagName}(?:\\s[^>]*?)?(?:\\s*>|\\s+>)`;
		const closeTag = `<\\/${tagName}(?:\\s*>|\\s+>)`;
		const regex = new RegExp(`${openTag}([\\s\\S]*?)${closeTag}`, 'g');
		const matches = [...code.matchAll(regex)];
		const childComponents = matches[index]
			? [
					matches[index][1]
						.replace(/&lt;/g, '<')
						.replace(/&gt;/g, '>')
						.replace(/&quot;/g, '"')
						.replace(/&#39;/g, "'")
						.replace(/&amp;/g, '&')
						.trim()
				]
			: [];

		if (target === 'react') {
			wrappedChildren = `<>${childComponents}</>`;
		} else if (target === 'angular' || target === 'vue') {
			wrappedChildren = `\`${childComponents}\``;
		}

		args.push(`${childKey}: ${wrappedChildren}`);
	} else if (target !== 'react') {
		args.push(`${childKey}: ""`);
	}

	return { changedExample, decorators };
};

/**
 * Generates Storybook stories from component examples
 * @param {Object} params - Parameters object
 * @param {import('@builder.io/mitosis').MitosisComponent} params.json - MitosisComponent json
 * @param {string} params.target - Target framework (react, angular, vue)
 * @param {string} params.name - Story name
 * @param {Object} params.wrappingContainer - Wrapping container containing examples
 * @param {Object} params.meta - Metadata object
 * @param {string} params.componentNameLowercase - Lowercase component name
 * @param {string} params.componentName - Component name
 * @param {string} params.code - Generated example code
 * @returns {string} Generated stories code
 */
const getStories = ({
	json,
	target,
	name,
	wrappingContainer,
	meta,
	componentNameLowercase,
	componentName,
	code
}) => {
	const { children: examples } = wrappingContainer;

	let exampleNames;
	if (meta?.useMetadata?.storybookNames) {
		exampleNames = meta.useMetadata.storybookNames.map((name) =>
			name.replace(/[^a-zA-Z0-9]/g, '')
		);
	}

	return examples
		.filter((example) => {
			if (example.properties) {
				const className =
					example.properties['class'] ??
					example.properties['className'];
				const storyBookIgnore = example.properties['data-sb-ignore'];

				if (className === 'line-break' || storyBookIgnore) {
					return false;
				}
			}

			return true;
		})
		.map((example, index) => {
			const exampleName =
				(exampleNames && exampleNames[index]) || `${name}${index}`;
			let args = [];
			const { changedExample, decorators } = processChildren(
				example,
				target,
				componentNameLowercase,
				componentName,
				args,
				code,
				index
			);

			if (!changedExample) {
				throw Error(`something is wrong with: ${name}`);
			}

			example = changedExample;

			processBindings(json, example, target, args);

			// Add other properties
			for (const [key, value] of Object.entries(example.properties)) {
				if (target === 'angular' && key.startsWith('data-')) {
					args.push(`"attr.${key}": "${value}"`);
				} else {
					args.push(`"${key}": "${value}"`);
				}
			}

			return `export const ${exampleName}: Story = {
	args: {
	${args.join(',\n')}
	},
	${decorators}
};`;
		})
		.join('\n');
};

module.exports = { getStories };
