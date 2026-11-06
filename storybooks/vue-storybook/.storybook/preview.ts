import type { Decorator, Preview } from '@storybook/vue3-vite';
import { StoryContext } from 'storybook/internal/csf';
import AutodocsPage from './autodocs-page.mdx';
import './global.css';
import { applyMode, modeGlobalTypes, modeInitialGlobals } from './mode';
import { addSourceImports } from './source-imports';
import { docsTheme } from './theme';

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
				transform: (code: string, context: StoryContext) => {
					// "Show code" as a single-file component with its imports.
					const named = code
						.replaceAll(
							`<${context.component.__name}`,
							`<${context.component.name}`
						)
						.replaceAll(
							`</${context.component.__name}`,
							`</${context.component.name}`
						);
					return addSourceImports(named, 'vue');
				}
			}
		}
	}
};

export default preview;
