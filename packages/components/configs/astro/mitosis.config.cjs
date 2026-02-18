const template = require('./index.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**/*.{lite.tsx,ts}',
	exclude: ['src/**/*.agent.lite.tsx'],
	targets: ['template'],
	dest: '../../output/tmp',
	options: {
		template
	},
	getTargetPath: ({ target }) => {
		if (target === 'template') {
			return 'astro';
		}
		return undefined;
	}
};
