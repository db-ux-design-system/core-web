// ============================================================================
// Dependencies
// ============================================================================
const { getRootProps, isEvent } = require('./utils.cjs');

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Replaces props references in code with direct variable names
 * @param {string} code - Code string containing props references
 * @returns {string} Code with props references replaced
 */
const replacePropsInCode = (code) => code.replaceAll(/props\.(\w+)/g, '$1');

// ============================================================================
// Node Type Handlers
// ============================================================================

/**
 * Handles text nodes and converts them to appropriate output
 * @param {import('@builder.io/mitosis').MitosisNode} node - The text node to handle
 * @returns {string} The rendered text or slot
 */
const handleTextNode = (node) => {
	const { bindings } = node;
	const code = bindings._text.code;
	return code === 'props.children'
		? '<slot />' // Convert children to default slot
		: code.includes('props.')
			? `{${replacePropsInCode(code)}}` // Convert props to variables
			: code; // Return as-is
};

/**
 * Handles Show nodes (conditional rendering)
 * @param {import('@builder.io/mitosis').MitosisNode} node - The Show node to handle
 * @returns {string} The rendered conditional expression
 */
const handleShowNode = (node) => {
	const { bindings, children, meta } = node;
	const condition = replacePropsInCode(bindings.when.code);
	const elseCase = meta.else ? `\n: <>${handleNode(meta.else)}</>` : '';

	// Use ternary if else exists, otherwise use &&
	return `{${condition} ${elseCase ? '?' : '&&'} <>
		${getChildren(children)}
	</>${elseCase}}`;
};

/**
 * Handles For nodes (list rendering)
 * @param {import('@builder.io/mitosis').MitosisNode} node - The For node to handle
 * @returns {string} The rendered map expression
 */
const handleForNode = (node) => {
	const { bindings, children, scope } = node;
	const each = bindings?.each?.code;

	if (!each) return '';

	return `{${replacePropsInCode(each)}.map((${scope.forName}) => (
		${getChildren(children)}
	))}`;
};

/**
 * Handles Slot nodes (named slots)
 * @param {import('@builder.io/mitosis').MitosisNode} node - The Slot node to handle
 * @returns {string} The rendered slot element
 */
const handleSlotNode = (node) => {
	const { properties } = node;
	return `<slot name="${properties.name}" />`;
};

/**
 * Handles generic element nodes and converts them to Astro markup
 * @param {import('@builder.io/mitosis').MitosisNode} node - The node to handle
 * @param {string[]} [props] - Array of component properties
 * @param {boolean} [root] - Whether this is the root element
 * @returns {string} The rendered element
 */
const handleNode = (node, props, root) => {
	const { name, children, bindings, properties } = node;

	// Route to specialized handlers based on node type
	if (bindings._text) {
		return handleTextNode(node);
	}
	if (name === 'Show') {
		return handleShowNode(node);
	}
	if (name === 'For') {
		return handleForNode(node);
	}
	if (name === 'Slot') {
		return handleSlotNode(node);
	}

	// Remove bindings that shouldn't be rendered
	Object.keys(bindings).forEach((bind) => {
		if (isEvent(bind) || bind === 'ref' || bind === 'key') {
			delete bindings[bind];
		}
	});

	const isDbComponent = name.startsWith('DB');

	// ========================================================================
	// Build element attributes
	// ========================================================================

	// Root props spread (only for root elements)
	const rootProps = getRootProps(props);

	// Static properties from the node
	const componentProps = Object.entries(properties)
		.filter(([key]) => key !== 'key') // Exclude key prop
		.map(([key, value]) => {
			// Convert class to className for DB components
			if (isDbComponent && key === 'class') {
				key = 'className';
			}
			return `${key}="${value}"`;
		})
		.join(' ');

	// Dynamic bindings from the node
	const bindingProps = Object.entries(bindings)
		.map(([key, value]) => {
			const code = replacePropsInCode(value.code);

			// Convert tabIndex to lowercase for HTML
			if (key === 'tabIndex') {
				key = 'tabindex';
			}

			return `${key}={${code}}`;
		})
		.join(' ');

	// Determine tag name (DB components keep case, others lowercase)
	const tag = isDbComponent ? name : name.toLowerCase();

	// Combine all props
	const allProps = [componentProps, bindingProps, rootProps]
		.filter(Boolean)
		.join(' ');

	// Add connect-id for root elements with web components
	const connectIdString = root
		? ' data-connect-id={requiresWebComponent ? connectId: undefined} '
		: '';

	return `<${tag}${connectIdString}${allProps ? ' ' + allProps : ''}>${getChildren(children)}</${tag}>`;
};

// ============================================================================
// Main Export Function
// ============================================================================

/**
 * Recursively processes child nodes and converts them to Astro markup
 * @param {import('@builder.io/mitosis').MitosisNode[]} nodes - Array of nodes to process
 * @param {string[]} [props] - Array of component properties
 * @param {boolean} [root] - Whether these are root-level nodes
 * @returns {string} The rendered children as a string
 */
const getChildren = (nodes, props, root) => {
	return nodes.map((node) => handleNode(node, props, root)).join('\n');
};

// ============================================================================
// Exports
// ============================================================================
module.exports = { getChildren };
