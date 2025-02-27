const stencil = require('./index.cjs');

module.exports = {
	files: 'src/**',
	targets: ['stencil'],
	dest: '../../output/tmp',
	options: {
		stencil
	}
};
