const { globSync } = require('glob');
const SVGFixer = require('oslllo-svg-fixer');

const cleanIcons = async (src, ignoreGlobs) => {
	const paths = `${src}/**/*.svg`;
	const options = {};
	if (ignoreGlobs) {
		options.ignore = ignoreGlobs;
	}

	const globPaths = globSync(paths, options)
		.map((path) => path.replace(/\\/g, '/'))
		.map((path) => path.slice(0, Math.max(0, path.lastIndexOf('/'))))
		.filter((v, i, self) => i === self.indexOf(v));

	for (const path of globPaths) {
		// eslint-disable-next-line no-await-in-loop,new-cap
		await SVGFixer(path, path, { showProgressBar: true }).fix();
	}
};

module.exports = { cleanIcons };
