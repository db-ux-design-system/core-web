const angular = require('./angular');
const react = require('./react');
const vue = require('./vue');
const stencil = require('./stencil');

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
