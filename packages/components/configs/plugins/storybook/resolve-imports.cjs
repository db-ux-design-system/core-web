/**
 * Resolves component imports from the imports array
 * @param {Array<import('@builder.io/mitosis').MitosisImport>} imports - Array of import objects
 * @returns {{allImports: Array<string>}} Component name and all imports
 */
const resolveImports = (imports) => {
	let allImports;

	if (imports.length > 0) {
		const componentImports = imports.filter((imp) =>
			imp.path.endsWith(`.lite`)
		);
		if (componentImports.length > 0) {
			allImports = componentImports.flatMap((imp) =>
				Object.keys(imp.imports)
			);
		}
	}

	return { allImports };
};

/**
 * Resolves data imports from relative paths
 * @param {Array<import('@builder.io/mitosis').MitosisImport>} imports - Array of import objects
 * @returns {string} Import statement string
 */
const resolveDataImports = (imports) => {
	if (!imports || imports.length === 0) return '';

	return imports
		.filter((imp) => imp.path === "./data")
		.map((imp) => {
			const namedImports = Object.keys(imp.imports).join(', ');
			return `import { ${namedImports} } from '${imp.path}';`;
		})
		.join('\n');
};

module.exports = { resolveImports, resolveDataImports };
