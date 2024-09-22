module.exports = {
	typescript: true,
	standalone: true,
	visuallyIgnoreHostElement: false,
	importMapper: (component, theImport, importedValues, componentsUsed) => {
		const { namedImports, defaultImport } = importedValues;
		const { path } = theImport;
		return namedImports
			? `import ${namedImports} from '${path}';`
			: componentsUsed.includes(defaultImport)
				? `import { ${defaultImport} } from '${path}';`
				: `import '${path}';`;
	}
};
