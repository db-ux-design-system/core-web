/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**',
	targets: ['angular'],
	dest: '../../output/tmp',
	options: {
		angular: {
			experimental: {
				outputs: (_json, propName) => {
					return propName === 'click' ? 'click' : undefined;
				}
			}
		}
	}
};
