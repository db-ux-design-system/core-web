/**
 * Get a valid slot for Angular, Vue and Stencil
 * @param key {string}
 * @returns {string}
 */
const getSlotKey = (key) => key.replace(/([A-Z,0-9])/g, '-$1').toLowerCase();

/**
 * Convert kebab-case to PascalCase
 * @param str {string}
 * @returns {string}
 */
const toPascalCase = (str) =>
	str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');

/**
 * Convert a PascalCase string to dash-case, splitting on the letter->digit
 * boundary too (`HeadingH1` -> `heading-h-1`). Kept identical to the `dashCase`
 * in `plugins/attribute-passing/index.cjs` so derived values stay in sync.
 * @param str {string}
 * @returns {string}
 */
const dashCase = (str) =>
	str
		.replace(/[A-Z]/g, (m, i) => (i > 0 ? '-' : '') + m.toLowerCase())
		.replace(/([a-z])([0-9])/g, '$1-$2');

/**
 * Derive the custom-element tag for a component name (`DBButton` -> `db-button`,
 * `DBHeadingH1` -> `db-heading-h-1`), matching the tag the attribute-passing
 * plugin registers for the Stencil output.
 * @param componentName {string}
 * @returns {string}
 */
const componentNameToTag = (componentName) =>
	`db-${dashCase(componentName.replace('DB', ''))}`;

module.exports = {
	getSlotKey,
	toPascalCase,
	dashCase,
	componentNameToTag
};
