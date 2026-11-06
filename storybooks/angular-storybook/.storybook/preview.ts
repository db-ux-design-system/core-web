import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Decorator, Preview, StoryContext } from '@storybook/angular';
import docJson from '../src/components/documentation.json';
import AutodocsPage from './autodocs-page.mdx';
import { applyMode, modeGlobalTypes, modeInitialGlobals } from './mode';
import { addSourceImports } from './source-imports';
import { docsTheme } from './theme';
setCompodocJson(docJson);

const withMode: Decorator = (storyFn, { globals }) => {
	applyMode(globals);
	return storyFn();
};

const preview: Preview = {
	globalTypes: modeGlobalTypes,
	initialGlobals: modeInitialGlobals,
	decorators: [withMode],
	parameters: {
		options: {
			// The component overview page comes first in every component group.
			storySort: {
				order: [
					'Getting Started',
					'Components',
					['*', ['Overview', '*']]
				]
			}
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		actions: { argTypesRegex: '^on.*' },
		docs: {
			// Colors and fonts of the design system, see theme.ts.
			theme: docsTheme,
			// Example pages without the properties table, see autodocs-page.mdx.
			page: AutodocsPage,
			toc: {
				// No visible title, like the platform TOC. Without a title Storybook
				// keeps a visually hidden "Table of contents" heading.
				headingSelector: 'h1, h3'
			},
			source: {
				transform: async (code: string, context: StoryContext) => {
					let result = code;
					for (const [key, value] of Object.entries(
						context['allArgs']
					)) {
						if (typeof value === 'function') {
							continue;
						}

						// Objects and arrays (e.g. `items` of DBBreadcrumb) stay a
						// property binding with a literal; as a string they would
						// print "[object Object]".
						if (value !== null && typeof value === 'object') {
							const literal = JSON.stringify(value)
								.replaceAll("'", String.raw`\'`)
								.replaceAll('"', "'");
							result = result.replaceAll(
								`[${key}]="${key}"`,
								`[${key}]="${literal}"`
							);
							continue;
						}

						result = result
							.replaceAll(`"${key}"`, `"${value}"`)
							.replaceAll(`[${key}]`, (substring) => {
								if (!substring.startsWith('[attr.')) {
									return key;
								}

								return substring;
							})
							.replaceAll(`this['${key}']`, `'${value}'`);
					}

					// "Show code" as a standalone component with its imports.
					return addSourceImports(result, 'angular');
				},
				language: 'typescript'
			}
		}
	}
};

export default preview;
