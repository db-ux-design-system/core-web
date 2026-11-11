const { targetMapping } = require('./target-mapping.cjs');
const { resolveImports, resolveDataImports } = require('./resolve-imports.cjs');
const { getMetaObject } = require('./get-meta-object.cjs');
const { getStories } = require('./get-stories.cjs');
const { toPascalCase, componentNameToTag } = require('../utils.cjs');

/**
 * Placeholder image of the Storybooks (`public/assets/images`), relative to
 * the Storybook base path.
 */
const PLACEHOLDER_IMAGE = 'assets/images/placeholder.jpg';

/**
 * Examples like DBBrand and DBNotification get their image path from the
 * state method `getImage()`, which points into the showcases. The stories do
 * not contain the state, so the call throws ("getImage is not defined"). It is
 * replaced with the placeholder image of the Storybooks, for every target.
 */
const replaceShowcaseImage = (code) =>
	code
		// React `src={getImage()}`, Vue `:src="getImage()"`, Angular
		// `[attr.src]="getImage()"` / `[src]="getImage()"`
		.replaceAll(
			/(?::|\[attr\.|\[)?src\]?=(?:\{|")(?:state\.|this\.)?getImage\(\)(?:\}|")/g,
			`src="${PLACEHOLDER_IMAGE}"`
		)
		.replaceAll(
			/(?:state\.|this\.)?getImage\(\)/g,
			`'${PLACEHOLDER_IMAGE}'`
		);

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

			// Web components render by tag, not by an imported component symbol.
			// Derive the custom-element tag (e.g. `db-button`, `db-heading-h-1`)
			// via the shared helper, matching the registered Stencil element.
			const customElementTag = componentNameToTag(componentName);

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

			// Web components are referenced by tag, so the generated story only
			// needs the Props type (for argTypes typing) plus the helper that
			// turns the Storybook args into an attribute string. Every other
			// target imports the component value(s) from `@components`.
			const componentsImport =
				target === 'stencil'
					? `import type { ${componentName}Props } from '@components';`
					: `import { ${allImports.join(',')}, type ${componentName}Props } from '@components';`;

			// Generate Storybook file content
			return replaceShowcaseImage(
				[
					`import type { Meta, StoryObj } from '@storybook/${targetMapItem}';`,
					target === 'angular'
						? `import { argsToTemplate, moduleMetadata, componentWrapperDecorator } from '@storybook/${targetMapItem}';`
						: '',
					target === 'stencil' ? `import { html } from 'lit';` : '',
					target === 'stencil'
						? `import { spreadArgs, unsafeHTML } from '../../../templates/apply-web-component-args';`
						: '',
					componentsImport,
					dataImports,
					"import { fn } from 'storybook/test';",
					getMetaObject({
						target,
						componentName,
						customElementTag,
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
				].join('\n')
			);
		}
	}
});
