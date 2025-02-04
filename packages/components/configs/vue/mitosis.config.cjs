const vue = require('./index.cjs');

module.exports = {
	files: 'src/**',
	targets: ['vue'],
	dest: '../../output/tmp',
	options: {
		vue
	}
};
