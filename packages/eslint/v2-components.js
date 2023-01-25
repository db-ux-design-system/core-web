const v2Components = new Set(['DBTab', 'DBTabBar']);
const v2ComponentImports = ['tab', 'tab-bar'];

const reportIssue = (context, node, name) => {
	context.report({
		node,
		message: `${name} is still using v2 styles!`
	});
};

const onV2ComponentUsed = (context) => {
	return {
		ImportDeclaration(node) {
			if (node.specifiers?.length > 0) {
				for (const specifier of node.specifiers) {
					const importName = specifier?.imported?.name;
					if (v2Components.has(importName)) {
						reportIssue(context, node, importName);
					}
				}
			}

			const foundImport = v2ComponentImports.find((comp) =>
				node.source?.value?.includes(`/src/components/${comp}/${comp}`)
			);
			if (foundImport) {
				reportIssue(context, node, foundImport);
			}
		}
	};
};

module.exports = { onV2ComponentUsed };
