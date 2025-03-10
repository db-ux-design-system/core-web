const angular = require('./index.cjs');

module.exports = {
	files: 'src/**',
	targets: ['angular'],
	dest: '../../output/tmp',
	options: {
		angular
	}
};
