const angular = require('./angular/index.cjs');
const react = require('./react/index.cjs');
const vue = require('./vue/index.cjs');
const stencil = require('./stencil/index.cjs');

module.exports = {
	files: 'src/**',
	targets: ['angular', 'vue', 'react', 'stencil'],
	dest: '../../output',
	options: {
		react,
		angular,
		vue,
		stencil
	}
};
