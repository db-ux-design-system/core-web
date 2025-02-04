const react = require('./index.cjs');

module.exports = {
	files: 'src/**',
	targets: ['react'],
	dest: '../../output/tmp',
	options: {
		react
	}
};
