module.exports = {
	files: 'src/**',
	targets: ['angular'],
	dest: '../../output/tmp',
	options: {
		angular: {
			typescript: true,
			standalone: true,
			visuallyIgnoreHostElement: false
		}
	}
};
