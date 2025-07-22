const stencil = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**/*.{lite.tsx,ts}',
	targets: ['stencil'],
	dest: '../../output/tmp',
	options: {
		stencil
	}
};
