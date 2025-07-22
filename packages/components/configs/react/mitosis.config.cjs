const react = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**/*.{lite.tsx,ts}',
	targets: ['react'],
	dest: '../../output/tmp',
	options: {
		react
	}
};
