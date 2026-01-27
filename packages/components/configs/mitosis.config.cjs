const angular = require('./angular/index.cjs');
const react = require('./react/index.cjs');
const vue = require('./vue/index.cjs');
const stencil = require('./stencil/index.cjs');
const astro = require('./astro/index.cjs');

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/**/*.{lite.tsx,ts}',
	exclude: ['src/**/*.agent.lite.tsx'],
	targets: ['angular', 'vue', 'react', 'stencil', 'template'],
	dest: '../../output',
	commonOptions: {
		typescript: true
	},
	options: {
		react,
		angular,
		vue,
		stencil,
		template: astro
	},
	getTargetPath: ({ target }) => {
		if (target === 'template') {
			return 'astro';
		}
		return undefined;
	}
};
