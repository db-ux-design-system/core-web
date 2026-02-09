/**
 * Resolves component imports from the imports array
 * @param {Array} imports - Array of import objects
 * @returns {{allImports: Array<string>}} Component name and all imports
 */
const resolveImports = (imports) => {
	let allImports;

	if (imports.length > 0) {
		const componentImports = imports.filter((imp) =>
			imp.path.endsWith(`.lite`)
		);
		if (componentImports.length > 0) {
			allImports = componentImports.map(
				(imp) => Object.keys(imp.imports)[0]
			);
		}
	}

	return { allImports };
};

module.exports = { resolveImports };
