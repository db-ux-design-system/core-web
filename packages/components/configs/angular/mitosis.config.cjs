const angular = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**/*.{lite.tsx,ts}',
	targets: ['angular'],
	dest: '../../output/tmp',
	options: {
		angular
	}
};
