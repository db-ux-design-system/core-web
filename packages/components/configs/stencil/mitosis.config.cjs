const stencil = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**/*.{lite.tsx,ts}',
	exclude: ['src/**/*.agent.lite.tsx', 'src/**/*.figma.*'],
	targets: ['stencil'],
	dest: '../../output/tmp',
	options: {
		stencil
	}
};
