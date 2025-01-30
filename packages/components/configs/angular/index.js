module.exports = {
	typescript: true,
	standalone: true,
	visuallyIgnoreHostElement: false,
	attributePassing: {
		enabled: true,
		customRef: 'ref'
	},
	importMapper: (component, theImport, importedValues, componentsUsed) => {
		const { defaultImport } = importedValues;
		const { path } = theImport;

		if (componentsUsed.includes(defaultImport)) {
			return `import { ${defaultImport} } from '${path}';`;
		}

		return undefined;
	}
};
