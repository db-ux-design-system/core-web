const { getSlotKey } = require('../utils.cjs');

/**
 * Extracts content from nested tags with depth tracking
 * @param {string} html - HTML string
 * @param {string} tag - Tag name to extract
 * @returns {string|null} Extracted content or null
 */
const extractNestedContent = (html, tag) => {
	const tags = [];
	let pos = 0;

	while (pos < html.length) {
		const openIdx = html.indexOf(`<${tag}`, pos);
		let closeIdx = html.indexOf(`</${tag}`, pos);

		if (openIdx === -1 && closeIdx === -1) break;

		if (openIdx !== -1 && (closeIdx === -1 || openIdx < closeIdx)) {
			const nextChar = html[openIdx + tag.length + 1];
			if (
				nextChar === ' ' ||
				nextChar === '>' ||
				nextChar === '\n' ||
				nextChar === '\r' ||
				nextChar === '\t'
			) {
				tags.push({ pos: openIdx, type: 'open' });
			}
			pos = openIdx + 1;
		} else if (closeIdx !== -1) {
			let checkPos = closeIdx + tag.length + 2;
			while (checkPos < html.length && /\s/.test(html[checkPos]))
				checkPos++;
			if (html[checkPos] === '>') {
				tags.push({ pos: closeIdx, type: 'close' });
			}
			pos = closeIdx + 1;
		}
	}

	let depth = 0,
		start = -1,
		end = -1;
	for (const t of tags) {
		if (t.type === 'open') {
			if (depth === 0) start = t.pos;
			depth++;
		} else {
			depth--;
			if (depth === 0) {
				end = t.pos;
				break;
			}
		}
	}

	if (start === -1 || end === -1) return null;

	let openEnd = start;
	let braceDepth = 0;
	while (openEnd < html.length) {
		const char = html[openEnd];
		if (char === '{') braceDepth++;
		else if (char === '}') braceDepth--;
		else if (char === '>' && braceDepth === 0) {
			openEnd++;
			break;
		}
		openEnd++;
	}

	return html.substring(openEnd, end).trim();
};

/**
 * Processes style decorators for wrapper divs
 * @param {import('@builder.io/mitosis').MitosisNode} example - Example object
 * @param {string} target - Target framework
 * @returns {string} Decorators code
 */
const processStyleDecorators = (example, target) => {
	if (!example.bindings?.style) return '';

	const nonReactStyles = example.bindings.style.code
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
		return `decorators: [() => ({ template: \`<div style="${nonReactStyles}"><story /></div>\` })],`;
	} else if (target === 'angular') {
		const storyString = '${story}';
		return `decorators: [componentWrapperDecorator((story) => \`<div style="${nonReactStyles}">${storyString}</div>\`)]`;
	} else if (target === 'react') {
		return `decorators:[ (Story) => (
      <div style={${example.bindings.style.code}}>
        <Story />
      </div>
    )]`;
	}
	return '';
};

/**
 * @param {import('@builder.io/mitosis').MitosisNode} example - Example object
 * @param {string} target - Target framework
 * @returns {string} HTML tag
 */
const getTagByTarget = (example, target) => {
	const decoratorName = example.name;
	let decoratorNameLowercase = getSlotKey(example.name.replace('DB', ''));
	if (decoratorNameLowercase.startsWith('-')) {
		decoratorNameLowercase = `db${decoratorNameLowercase}`;
	}

	return target === 'angular' ? decoratorNameLowercase : decoratorName;
};

/**
 * @param {[import('@builder.io/mitosis').MitosisNode]} children - Nodes
 * @param {string} target - Target framework
 * @param {string} componentName - Component name
 * @returns {string} Template
 */
const getChildrenTemplateWithoutComponent = (
	children,
	target,
	componentName
) => {
	return children
		.filter((child) => child.name !== componentName)
		.map((child) => {
			if (child.name === 'div' && child.properties['_text']) {
				return child.properties['_text'];
			}

			const childTag = getTagByTarget(child, target);

			return `<${childTag}>${getChildrenTemplateWithoutComponent(child.children, target, componentName)}</${childTag}>`;
		})
		.join('');
};

/**
 * Processes custom decorators for wrapper components marked with `data-sb-decorator` example: packages/components/src/components/tooltip/examples/animation.example.lite.tsx
 * @param {import('@builder.io/mitosis').MitosisNode} example - Example object
 * @param {string} target - Target framework
 * @param {string} componentName - Component name
 * @returns {string} Decorators code
 */
const processCustomDecorators = (example, target, componentName) => {
	if (example.properties?.['data-sb-decorator'] !== 'true') return '';

	const decoratorTag = getTagByTarget(example, target);

	const childrenWithoutComponent = getChildrenTemplateWithoutComponent(
		example.children,
		target,
		componentName
	);

	if (target === 'vue') {
		return `decorators: [() => ({ template: \`<${decoratorTag}>${childrenWithoutComponent}<story /></${decoratorTag}>\` })],`;
	} else if (target === 'angular') {
		const storyString = '${story}';
		return `decorators: [componentWrapperDecorator((story) => \`<${decoratorTag}>${childrenWithoutComponent}${storyString}</${decoratorTag}>\`)]`;
	} else if (target === 'react') {
		return `decorators:[ (Story) => (
      <${decoratorTag}>
		${childrenWithoutComponent}
        <Story />
      </${decoratorTag}>
    )]`;
	}
	return '';
};

/**
 * Extracts and processes child components from code
 * @param {string} code - Generated example code
 * @param {string} target - Target framework
 * @param {number} index - Index of example
 * @param {string} componentNameLowercase - Lowercase component name
 * @param {string} componentName - Component name
 * @returns {string} Wrapped children content
 */
const extractChildComponents = (
	code,
	target,
	componentNameLowercase,
	componentName,
	index
) => {
	const tagName =
		target === 'angular' ? `db-${componentNameLowercase}` : componentName;

	const matches = [];
	let searchPos = 0;
	while (searchPos < code.length) {
		const tagStart = code.indexOf(`<${tagName}`, searchPos);
		if (tagStart === -1) break;
		const content = extractNestedContent(code.substring(tagStart), tagName);
		if (content !== null) matches.push([null, content]);
		searchPos = tagStart + 1;
	}

	let childComponents = matches[index]
		? matches[index][1]
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
				.replace(/&quot;/g, '"')
				.replace(/&#39;/g, "'")
				.replace(/&amp;/g, '&')
				.trim()
		: '';

	if (childComponents.includes('getImage')) {
		childComponents = childComponents
			.replaceAll(':src="getImage()"', 'src="getImage"')
			.replaceAll('src={getImage()}', 'src="getImage"')
			.replaceAll('[attr.src]="getImage()"', 'src="getImage"')
			.replaceAll('getImage', '/assets/images/placeholder.jpg');
	}

	if (target === 'react') {
		return `<>${childComponents}</>`;
	} else if (target === 'angular' || target === 'vue') {
		return `\`${childComponents}\``;
	}
	return '';
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
 * Processes children and extracts decorators and text content
 * @param {import('@builder.io/mitosis').MitosisNode} example - Example object
 * @param {string} target - Target framework
 * @param {string} componentNameLowercase - Lowercase component name
 * @param {string} componentName - Component name
 * @param {Array} args - Args array to populate
 * @param {string} code - Generated example code
 * @param {number} index - Index of example
 * @returns {{[foundComponent]: import('@builder.io/mitosis').MitosisNode, decorators: string}} Decorators code and changed example
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

	const foundComponent =
		example.name === componentName
			? example
			: example.children.find(({ name }) => name === componentName);

	if (!foundComponent) return { foundComponent: undefined, decorators };

	const childKey = target === 'vue' ? 'default' : 'children';
	const firstChild = foundComponent.children[0];

	// Extract text content
	if (
		foundComponent.children.length === 1 &&
		firstChild &&
		firstChild.name === 'div' &&
		firstChild.properties['_text']
	) {
		args.push(`${childKey}: "${firstChild.properties['_text'].trim()}"`);
	} else if (firstChild) {
		const wrappedChildren = extractChildComponents(
			code,
			target,
			componentNameLowercase,
			componentName,
			index
		);
		args.push(`${childKey}: ${wrappedChildren}`);
	} else if (target !== 'react') {
		args.push(`${childKey}: ""`);
	}

	if (example.children[0]) {
		decorators =
			processStyleDecorators(example, target) ||
			processCustomDecorators(example, target, componentName);
	}

	return { foundComponent, decorators };
};

/**
 * Generates Storybook stories from component examples
 * @param {Object} params - Parameters object
 * @param {import('@builder.io/mitosis').MitosisComponent} params.json - MitosisComponent json
 * @param {string} params.target - Target framework (react, angular, vue)
 * @param {string} params.name - Story name
 * @param {import('@builder.io/mitosis').MitosisNode} params.wrappingContainer - Wrapping container containing examples
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
			const { foundComponent, decorators } = processChildren(
				example,
				target,
				componentNameLowercase,
				componentName,
				args,
				code,
				index
			);

			if (!foundComponent) {
				throw Error(`something is wrong with: ${name}`);
			}

			example = foundComponent;

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
