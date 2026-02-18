const astro = require('../plugins/astro/index.cjs');
const slotsPlugin = require('../plugins/stencil/slots.cjs');

/**
 * @type {import('@builder.io/mitosis').ToMitosisOptions}
 */
module.exports = {
	typescript: true,
	plugins: [slotsPlugin, astro],
	explicitBuildFileExtensions: {
		'.astro': /.lite.tsx/g
	}
};
