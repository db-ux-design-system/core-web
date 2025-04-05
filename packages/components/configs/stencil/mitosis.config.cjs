const stencil = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**',
	targets: ['stencil'],
	dest: '../../output/tmp',
	options: {
		stencil
	}
};
