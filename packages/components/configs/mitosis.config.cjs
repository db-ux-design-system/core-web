const angular = require('./angular/index.cjs');
const react = require('./react/index.cjs');
const vue = require('./vue/index.cjs');
const stencil = require('./stencil/index.cjs');
const toJSON = require('./plugins/json/index.cjs');

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**',
	targets: ['angular', 'vue', 'react', 'stencil'],
	dest: '../../output',
	commonOptions: {
		plugins: [toJSON]
	},
	options: {
		react,
		angular,
		vue,
		stencil
	}
};
