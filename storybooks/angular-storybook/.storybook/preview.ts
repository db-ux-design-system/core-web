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
				headingSelector: 'h1, h3',
				title: 'Table of Contents'
			},
			source: {
				transform: async (code: string, context: StoryContext) => {
					let result = code;
					for (const [key, value] of Object.entries(
						context['allArgs']
					)) {
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
