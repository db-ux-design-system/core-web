const angular = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**',
	targets: ['angular'],
	dest: '../../output/tmp',
	options: {
		angular
	}
};
