const stencil = require('./index');

module.exports = {
	files: 'src/**',
	targets: ['stencil'],
	dest: '../../output/tmp',
	options: {
		stencil
	}
};
