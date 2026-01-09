/**
 * Resolves component imports from the imports array
 * @param {Array} imports - Array of import objects
 * @param {string} componentNameLowercase - Lowercase component name
 * @returns {{componentName: string, allImports: Array<string>}} Component name and all imports
 */
const resolveImports = (imports, componentNameLowercase) => {
	let componentName;
	let allImports;

	if (imports.length > 0) {
		const componentImports = imports.filter((imp) =>
			imp.path.endsWith(`.lite`)
		);
		if (componentImports.length > 0) {
			const exampleComponentImport = imports.find((imp) =>
				imp.path.includes(componentNameLowercase)
			);
			const exampleComponentImports = Object.keys(
				exampleComponentImport.imports
			);
			if (exampleComponentImports.length > 0) {
				componentName = exampleComponentImports[0];
			}

			allImports = componentImports.map(
				(imp) => Object.keys(imp.imports)[0]
			);
		}
	}

	return { componentName, allImports };
};

module.exports = { resolveImports };
