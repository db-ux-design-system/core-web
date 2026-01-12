/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'**/package*.json': () => 'npm install --ignore-scripts'
};
