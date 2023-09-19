const Replace = require('replace-in-file');
const getComponentName = (componentName) => {
	return componentName
		.split('-')
		.map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
		.join('');
};

const runReplacements = (replacements, component, framework, file) => {
	if (component?.overwrites?.[framework]) {
		replacements = [...replacements, ...component.overwrites[framework]];
	}

	if (component?.overwrites?.global) {
		replacements = [...replacements, ...component.overwrites.global];
	}

	for (const replacement of replacements) {
		const option = {
			files: file,
			from: replacement.from,
			to: replacement.to
		};
		Replace.replaceInFileSync(option);
	}
};

module.exports = { getComponentName, runReplacements };
