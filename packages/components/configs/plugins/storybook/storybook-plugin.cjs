const { targetMapping } = require('./target-mapping.cjs');
const { resolveImports } = require('./resolve-imports.cjs');
const { getMetaObject } = require('./get-meta-object.cjs');
const { getStories } = require('./get-stories.cjs');

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

			const { componentName, allImports } = resolveImports(
				imports,
				componentNameLowercase
			);

			// Validate component import
			if (!componentName)
				return `Miss component with ../${componentNameLowercase}.lite inside example`;

			// Validate Fragment wrapper
			if (children.length !== 1 || children[0].name !== 'Fragment') {
				return `You need to wrap your example with a mitosis <Fragment>`;
			}

			// Generate Storybook file content
			return [
				`import type { Meta, StoryObj } from '@storybook/${targetMapItem}';`,
				target === 'angular'
					? `import { argsToTemplate, componentWrapperDecorator } from '@storybook/${targetMapItem}';`
					: '',
				`import { ${allImports.join(',')}, type ${componentName}Props } from '@components';`,
				"import { fn } from 'storybook/test';",
				getMetaObject({
					target,
					componentNameLowercase,
					componentName,
					name,
					meta
				}),
				getStories({
					target,
					fragment: children[0],
					meta,
					name,
					componentName
				})
			].join('\n');
		}
	}
});
