// ============================================================================
// Dependencies
// ============================================================================
const { getRootProps, isEvent, toDashedLowerCase } = require('./utils.cjs');

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
	const { bindings, properties } = node;
	const code = bindings._text?.code ?? properties._text;
	return code === 'props.children'
		? '<slot />' // Convert children to default slot
		: code.includes('props.')
			? `{${replacePropsInCode(code)}}` // Convert props to variables
			: code.replaceAll('\n', '').replaceAll('\t', ''); // Return as-is
};

/**
 * Handles Show nodes (conditional rendering)
 * @param {import('@builder.io/mitosis').MitosisComponent} json - Mitosis component
 * @param {import('@builder.io/mitosis').MitosisNode} node - The Show node to handle
 * @returns {string} The rendered conditional expression
 */
const handleShowNode = (json, node) => {
	const { bindings, children, meta } = node;
	const condition = replacePropsInCode(bindings.when.code);
	const elseCase = meta.else ? `\n: <>${handleNode(json, meta.else)}</>` : '';

	// Use ternary if else exists, otherwise use &&
	return `{(${condition}) ${elseCase ? '?' : '&&'} <>${getChildren(json, children)}</>${elseCase}}`;
};

/**
 * Handles For nodes (list rendering)
 * @param {import('@builder.io/mitosis').MitosisComponent} json - Mitosis component
 * @param {import('@builder.io/mitosis').MitosisNode} node - The For node to handle
 * @returns {string} The rendered map expression
 */
const handleForNode = (json, node) => {
	const { bindings, children, scope } = node;
	const each = bindings?.each?.code;

	if (!each) return '';

	return `{${replacePropsInCode(each)}.map((${scope.forName}) => (
		${getChildren(json, children)}
	))}`;
};

/**
 * Handles Slot nodes (named slots)
 * @param {import('@builder.io/mitosis').MitosisNode} node - The Slot node to handle
 * @returns {string} The rendered slot element
 */
const handleSlotNode = (node) => {
	const { properties } = node;

	const slotName = properties.name ? `name="${properties.name}"` : '';
	return `<slot ${slotName} />`;
};

/**
 * Handles generic element nodes and converts them to Astro markup
 * @param {import('@builder.io/mitosis').MitosisComponent} json - Mitosis component
 * @param {import('@builder.io/mitosis').MitosisNode} node - The node to handle
 * @param {string[]} [props] - Array of component properties
 * @param {boolean} [root] - Whether this is the root element
 * @returns {string} The rendered element
 */
const handleNode = (json, node, props, root) => {
	const { name, children, bindings, properties } = node;

	// Route to specialized handlers based on node type
	if (bindings._text || properties._text) {
		return handleTextNode(node);
	}
	if (name === 'Show') {
		return handleShowNode(json, node);
	}
	if (name === 'For') {
		return handleForNode(json, node);
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
			if (name.startsWith('DB') && key === 'class') {
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
	const tag = json.imports.some(
		(imp) => !!imp.imports[name] && imp.path.endsWith('.lite')
	)
		? name
		: toDashedLowerCase(name);

	// Combine all props
	const allProps = [componentProps, bindingProps, rootProps]
		.filter(Boolean)
		.join(' ');

	// Add connect-id for root elements with web components
	const connectIdString = root
		? ' data-connect-id={requiresWebComponent ? connectId: undefined} '
		: '';

	if (root && json.pluginData.path.endsWith('example.lite.tsx')) {
		return getChildren(json, children);
	}

	return `<${tag}${connectIdString}${allProps ? ' ' + allProps : ''}>${getChildren(json, children)}</${tag}>`;
};

// ============================================================================
// Main Export Function
// ============================================================================

/**
 * Recursively processes child nodes and converts them to Astro markup
 * @param {import('@builder.io/mitosis').MitosisComponent} json - Mitosis component
 * @param {import('@builder.io/mitosis').MitosisNode[]} nodes - Array of nodes to process
 * @param {string[]} [props] - Array of component properties
 * @param {boolean} [root] - Whether these are root-level nodes
 * @returns {string} The rendered children as a string
 */
const getChildren = (json, nodes, props, root) => {
	return nodes.map((node) => handleNode(json, node, props, root)).join('\n');
};

// ============================================================================
// Exports
// ============================================================================
module.exports = { getChildren };
