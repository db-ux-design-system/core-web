const angular = require('./angular');
const react = require('./react');
const vue = require('./vue');

module.exports = {
	files: 'src/**',
	targets: ['angular', 'vue', 'react'],
	dest: '../../output',
	options: {
		react,
		angular,
		vue
	}
};
