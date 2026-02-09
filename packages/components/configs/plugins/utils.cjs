/**
 * Get a valid slot for Angular, Vue and Stencil
 * @param key {string}
 * @returns {string}
 */
const getSlotKey = (key) => key.replace(/([A-Z])/g, '-$1').toLowerCase();

module.exports = {
	getSlotKey
};
