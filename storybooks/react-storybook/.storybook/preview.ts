import type { Decorator, Preview } from '@storybook/react-vite';
import AutodocsPage from './autodocs-page.mdx';
import './docs.css';
import './global.css';
import { applyMode, modeGlobalTypes, modeInitialGlobals } from './mode';
import { addSourceImports } from './source-imports';

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
			// Example pages without the properties table, see autodocs-page.mdx.
			page: AutodocsPage,
			toc: {
				headingSelector: 'h1, h3',
				title: 'Table of Contents'
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
