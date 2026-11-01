import type { Decorator, Preview } from '@storybook/react-vite';
import './global.css';

/**
 * Light/dark mode of the stories, switchable in the toolbar and via the
 * `globals=mode:dark` URL parameter. The URL parameter lets embedding pages
 * (e.g. the Design System Platform) pass their own mode into an iframe.
 *
 * `auto` sets no `data-mode`, so the stories follow `prefers-color-scheme`
 * as before.
 */
const withMode: Decorator = (Story, { globals }) => {
	const mode = globals['mode'];
	if (mode === 'light' || mode === 'dark') {
		document.documentElement.dataset['mode'] = mode;
	} else {
		delete document.documentElement.dataset['mode'];
	}

	return Story();
};

const preview: Preview = {
	globalTypes: {
		mode: {
			description: 'Light/dark mode',
			toolbar: {
				title: 'Mode',
				icon: 'contrast',
				items: [
					{ value: 'auto', title: 'System' },
					{ value: 'light', title: 'Light Mode' },
					{ value: 'dark', title: 'Dark Mode' }
				],
				dynamicTitle: true
			}
		}
	},
	initialGlobals: {
		mode: 'auto'
	},
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
			toc: {
				headingSelector: 'h1, h3',
				title: 'Table of Contents'
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
