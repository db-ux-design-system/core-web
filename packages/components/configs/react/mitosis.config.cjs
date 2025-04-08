const react = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**',
	targets: ['react'],
	dest: '../../output/tmp',
	options: {
		react
	}
};
