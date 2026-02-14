const astro = require('../plugins/astro/index.cjs');

/**
 * @type {import('@builder.io/mitosis').ToMitosisOptions}
 */
module.exports = {
	typescript: true,
	plugins: [astro],
	explicitBuildFileExtensions: {
		'.astro': /.lite.tsx/g
	}
};
