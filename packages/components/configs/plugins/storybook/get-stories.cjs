/**
 * Processes event bindings and adds them to args
 * @param {Object} example - Example object
 * @param {string} target - Target framework
 * @param {Array} args - Args array to populate
 */
const processBindings = (example, target, args) => {
	if (!example?.bindings) return;

	for (const [key, value] of Object.entries(example.bindings)) {
		if (key.startsWith('on')) {
			let bindingKey = key;
			if (target === 'angular') {
				bindingKey = key.replace('on', '').toLowerCase();
			}
			args.push(`"${bindingKey}": fn()`);
		} else {
			args.push(`"${key}": ${value.code}`);
		}
	}
};

/**
 * Processes children and extracts decorators and text content
 * @param {Object} example - Example object
 * @param {string} target - Target framework
 * @param {string} componentName - Component name
 * @param {Array} args - Args array to populate
 * @returns {{changedExample: Object, decorators: string}} Decorators code and changed example
 */
const processChildren = (example, target, componentName, args) => {
	let decorators = '';
	let changedExample = example;

	if (example.children.length !== 1) return decorators;

	let firstChild = example.children[0];
	if (firstChild.name === componentName) {
		// Handle wrapper div with styles
		if (example.bindings?.style) {
			const nonReactStyles = example.bindings?.style?.code
				.replaceAll('{', '')
				.replaceAll('}', '')
				.replaceAll("'", '')
				.replaceAll('\n', '');
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

		changedExample = firstChild;
		firstChild = firstChild.children[0];
	}

	// Extract text content
	if (
		firstChild &&
		firstChild.name === 'div' &&
		firstChild.properties['_text']
	) {
		const key = target === 'vue' ? 'default' : 'children';
		args.push(`${key}: "${firstChild.properties['_text'].trim()}"`);
	}

	return { changedExample, decorators };
};

/**
 * Generates Storybook stories from component examples
 * @param {Object} params - Parameters object
 * @param {string} params.target - Target framework (react, angular, vue)
 * @param {string} params.name - Story name
 * @param {Object} params.fragment - Fragment containing examples
 * @param {Object} params.meta - Metadata object
 * @param {string} params.componentName - Component name
 * @returns {string} Generated stories code
 */
const getStories = ({ target, name, fragment, meta, componentName }) => {
	const { children: examples } = fragment;

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
			const { changedExample, decorators } = processChildren(
				example,
				target,
				componentName,
				args
			);
			example = changedExample;
			if (!example) {
				throw Error(`somethings wrong with: ${name}`);
			}

			processBindings(example, target, args);

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
