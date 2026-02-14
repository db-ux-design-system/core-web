// ============================================================================
// Constants
// ============================================================================
const outputFolder = 'output';
const astroDirPath = `../../${outputFolder}/astro`;

// ============================================================================
// Slot Utilities
// ============================================================================

/**
 * Recursively finds all named slots in a component tree
 * @param {Array} nodes - Array of component nodes to traverse
 * @returns {string[]} Array of unique slot names found in the tree
 */
const findAllSlots = (nodes) => {
	const result = [];

	// Recursive function to traverse the node tree
	const traverse = (currentNode) => {
		// Check if current node is a Slot with a name property
		if (
			currentNode.name === 'Slot' &&
			currentNode.properties.name &&
			!result.includes(currentNode.properties.name)
		) {
			result.push(currentNode.properties.name);
		}
		// Recursively traverse children and else branches
		if (currentNode.children) {
			currentNode.children.forEach(traverse);
			if (currentNode.meta.else) {
				traverse(currentNode.meta.else);
			}
		}
	};

	// Start traversal from all root nodes
	for (const node of nodes) {
		traverse(node);
	}
	return result;
};

// ============================================================================
// Props Utilities
// ============================================================================

/**
 * Generates the root props spread syntax for Astro components
 * @param {string[]} props - Array of component properties
 * @returns {string} Props spread syntax or empty string
 */
const getRootProps = (props) => {
	return props?.length ? '{...Astro.props}' : '';
};

/**
 * Checks if a property name is an event handler
 * @param {string} prop - The property name to check
 * @returns {boolean} True if the property is an event handler (e.g., onClick, onSubmit)
 */
const isEvent = (prop) =>
	prop.length > 2 &&
	prop.startsWith('on') && // Starts with 'on'
	prop[2] === prop[2].toUpperCase(); // Third character is uppercase

/**
 * Converts a string to dashed lowercase format (camelCase -> camel-case)
 * @param {string} input - The input string to convert
 * @returns {string} The converted string in dashed lowercase format
 */
const toDashedLowerCase = (input) => {
	return input
		.replace(/([a-z])([A-Z])/g, '$1-$2') // Insert dash between lowercase and uppercase
		.replace(/\s+/g, '-') // Replace spaces with dashes
		.toLowerCase(); // Convert to lowercase
};

// ============================================================================
// Exports
// ============================================================================
module.exports = {
	outputFolder,
	astroDirPath,
	findAllSlots,
	getRootProps,
	isEvent,
	toDashedLowerCase
};
