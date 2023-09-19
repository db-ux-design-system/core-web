const Replace = require('replace-in-file');
const Fse = require('fs-extra');
const { components } = require('./components');
const toUpperCase = (component) => {
	return component
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
};
const updateNestedComponents = (input, rootComponentName) => {
	let fileContent = input;

	for (const nestedComponent of components.filter(
		(nComp) => nComp.name !== rootComponentName
	)) {
		const nCompUpperCase = toUpperCase(nestedComponent.name);

		if (
			fileContent.includes(
				`import { DB${nCompUpperCase} } from "../${nestedComponent.name}";`
			)
		) {
			fileContent = fileContent.replace(
				`import { DB${nCompUpperCase} } from "../${nestedComponent.name}";`,
				`import "../${nestedComponent.name}/${nestedComponent.name}";`
			);

			while (
				fileContent.includes(`<DB${nCompUpperCase}`) ||
				fileContent.includes(`</DB${nCompUpperCase}`)
			) {
				fileContent = fileContent.replace(
					`<DB${nCompUpperCase}`,
					`<db-${nestedComponent.name}`
				);
				fileContent = fileContent.replace(
					`</DB${nCompUpperCase}`,
					`</db-${nestedComponent.name}`
				);
			}
		}
	}

	return fileContent;
};

const workaroundAttributes = (lines) => {
	return lines.map((line) => {
		if (line.includes('el.setAttribute') && line.includes(', this.props')) {
			const property = line.substring(
				line.indexOf('this.props.') + 11,
				line.indexOf(')')
			);
			return `if(this.props.${property}) ${line}`;
		}

		if (line.includes('if (self.props.validityChange) {')) {
			return `if (self.props.validityChange && typeof self.props.validityChange === 'function') {`;
		}

		return line;
	});
};

module.exports = () => {
	for (const component of components) {
		const filePath = `../../output/webcomponent/src/components/${component.name}/${component.name}.ts`;
		const fixImports = {
			files: filePath,
			processor(input) {
				let lines = input
					.split('\n')
					.filter(
						(line) =>
							!line.includes('@db-ui') &&
							!line.includes('import type')
					);
				lines = workaroundAttributes(lines);
				const filteredInput = lines.join('\n');
				const nestedComponent = updateNestedComponents(
					filteredInput,
					component.name
				);
				const exportComponent = `export default DB${toUpperCase(
					component.name
				)};`;
				return `${nestedComponent}\n${exportComponent}`;
			}
		};

		const defaultStyleUrl = {
			files: filePath,
			from: 'this.state = {',
			to: `this.state = {stylePath: "components/${component.name}/${component.name}-web-component.css",`
		};

		try {
			Replace.sync(fixImports);
			Replace.sync(defaultStyleUrl);

			if (component?.overwrites?.webComponents) {
				for (const over of component.overwrites.webComponents) {
					Replace.sync({
						files: filePath,
						from: over.from,
						to: over.to
					});
				}
			}

			if (Fse.pathExistsSync(filePath)) {
				Fse.moveSync(
					`../../output/webcomponent/src/components/${component.name}/${component.name}.ts`,
					`../../output/webcomponent/src/components/${component.name}/${component.name}.js`
				);
			}
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
