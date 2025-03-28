const vue = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**',
	targets: ['vue'],
	dest: '../../output/tmp',
	options: {
		vue
	}
};
