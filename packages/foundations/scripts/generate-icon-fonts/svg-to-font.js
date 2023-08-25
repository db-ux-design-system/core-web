const svgtofont = require('svgtofont');

const svgToFont = async (temporaryDirectory, fontName, dist) =>
	svgtofont({
		src: temporaryDirectory,
		dist,
		fontName: fontName ?? 'db-ux',
		emptyDist: true,
		css: true,
		outSVGReact: false, // TODO: Consider if we want to give this to users
		outSVGPath: false,
		useNameAsUnicode: true,
		svgicons2svgfont: {
			fontHeight: 1000,
			normalize: true
		},
		website: {
			title: fontName ?? 'db-ux',
			logo: '',
			meta: {},
			description: ``,
			footerInfo: ``
		}
	});

module.exports = { svgToFont };
