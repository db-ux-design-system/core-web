import type { Decorator, Preview } from '@storybook/react-vite';
import AutodocsPage from './autodocs-page.mdx';
import './global.css';
import { applyMode, modeGlobalTypes, modeInitialGlobals } from './mode';
import { addSourceImports } from './source-imports';
import { docsTheme } from './theme';

const withMode: Decorator = (Story, { globals }) => {
	applyMode(globals);
	return Story();
};

const preview: Preview = {
	globalTypes: modeGlobalTypes,
	initialGlobals: modeInitialGlobals,
	decorators: [withMode],
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
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
			// "Show code" with the imports of the components used.
			source: {
				transform: (code: string) => addSourceImports(code, 'react')
			}
		},
		options: {
			// The component overview page comes first in every component group.
			storySort: {
				order: [
					'Getting Started',
					'Components',
					['*', ['Overview', '*']]
				]
			}
		}
	}
};

export default preview;
