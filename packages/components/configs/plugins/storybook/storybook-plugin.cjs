const { targetMapping } = require('./target-mapping.cjs');
const { resolveImports } = require('./resolve-imports.cjs');
const { getMetaObject } = require('./get-meta-object.cjs');
const { getStories } = require('./get-stories.cjs');
const { toPascalCase } = require('../utils.cjs');

/**
 * Mitosis plugin for generating Storybook stories
 * Transforms Mitosis components into framework-specific Storybook stories
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'storybook-plugin',
	code: {
		post: (code, json) => {
			const { imports, pluginData, name, children, meta } = json;
			const { target, path } = pluginData;
			const targetMapItem = targetMapping[target].storyBookLib;

			const componentNameLowercase = path.split('/')[2];
			const componentName =
				meta?.useMetadata?.storybookComponentName ??
				`DB${toPascalCase(componentNameLowercase)}`;

			const { allImports } = resolveImports(imports);

			if (target === 'angular') {
				// Add directive imports for navigation, just for simplicity
				allImports.push(
					"MetaNavigationDirective",
					"NavigationDirective",
					"NavigationContentDirective",
					"SecondaryActionDirective"
				);
			}

			// Validate component import
			if (!componentName)
				throw new Error(
					`Miss component with ../${componentNameLowercase}.lite inside example`
				);

			// Validate Fragment wrapper
			if (
				children.length !== 1 &&
				(children[0].name === 'Fragment' || children[0].name === 'div')
			) {
				throw Error(
					`You need to wrap your example with a mitosis <Fragment> or a wrapping <div>`
				);
			}

			// Generate Storybook file content
			return [
				`import type { Meta, StoryObj } from '@storybook/${targetMapItem}';`,
				target === 'angular'
					? `import { argsToTemplate, moduleMetadata, componentWrapperDecorator } from '@storybook/${targetMapItem}';`
					: '',
				`import { ${allImports.join(',')}, type ${componentName}Props } from '@components';`,
				"import { fn } from 'storybook/test';",
				getMetaObject({
					target,
					componentNameLowercase,
					componentName,
					name,
					meta,
					allImports
				}),
				getStories({
					json,
					target,
					wrappingContainer: children[0],
					meta,
					name,
					componentNameLowercase,
					componentName,
					code
				})
			].join('\n');
		}
	}
});
