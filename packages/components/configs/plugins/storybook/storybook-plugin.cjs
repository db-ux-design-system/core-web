const { targetMapping } = require('./target-mapping.cjs');
const { resolveImports, resolveDataImports } = require('./resolve-imports.cjs');
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
			const folderComponentName = `DB${toPascalCase(componentNameLowercase)}`;
			// The sidebar category defaults to the component folder, so that level or
			// size variants of one component group together (heading -> DBHeadingH1..H6
			// all live under DBHeading). Folders that also ship a distinct component
			// override it via `storybookCategory` to get their own category.
			const category =
				meta?.useMetadata?.storybookCategory ?? folderComponentName;
			// The reference component used for `component:`, the `@components` import
			// and the Props type. Folders without a matching default export have to
			// name one explicitly via `storybookComponentName`.
			const componentName =
				meta?.useMetadata?.storybookComponentName ??
				folderComponentName;

			const { allImports } = resolveImports(imports);
			const dataImports = resolveDataImports(imports);

			if (target === 'angular') {
				// TODO: Remove the this when https://github.com/db-ux-design-system/core-web/pull/4639 is merged
				// Add directive imports for navigation, just for simplicity we add it to every component
				allImports.push(
					'MetaNavigationDirective',
					'NavigationDirective',
					'NavigationContentDirective',
					'SecondaryActionDirective'
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

			const examples = children[0].children.filter(
				(example) =>
					!example.properties || !example.properties['data-sb-ignore']
			);

			// Generate Storybook file content
			return [
				`import type { Meta, StoryObj } from '@storybook/${targetMapItem}';`,
				target === 'angular'
					? `import { argsToTemplate, moduleMetadata, componentWrapperDecorator } from '@storybook/${targetMapItem}';`
					: '',
				`import { ${allImports.join(',')}, type ${componentName}Props } from '@components';`,
				dataImports,
				"import { fn } from 'storybook/test';",
				getMetaObject({
					target,
					componentName,
					category,
					name,
					meta,
					allImports
				}),
				getStories({
					json,
					target,
					examples,
					meta,
					name,
					componentNameLowercase,
					componentName,
					code,
					allImports
				})
			].join('\n');
		}
	}
});
