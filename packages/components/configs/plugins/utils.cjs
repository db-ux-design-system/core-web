/**
 * Get a valid slot for Angular, Vue and Stencil
 * @param key {string}
 * @returns {string}
 */
const getSlotKey = (key) => key.replace(/([A-Z])/g, '-$1').toLowerCase();

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

module.exports = {
	getSlotKey,
	toPascalCase
};
