import type { Preview } from '@storybook/react-vite';
import './docs.css';
import './global.css';
import { docsTheme } from './theme';

const preview: Preview = {
	parameters: {
		docs: {
			// Colors and fonts of the design system, see theme.ts.
			theme: docsTheme
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		options: {
			// Getting Started first, then the Foundations pages in the order of
			// storybooks/_shared/foundations/pages.ts. The framework refs follow.
			storySort: {
				order: [
					'Getting Started',
					'Foundations',
					[
						'Colors',
						'Densities',
						'Font Sizes',
						'Variables',
						'Icons',
						'Custom Icons',
						'IDE Support',
						'Performance',
						'Browser Support',
						'Test Table'
					]
				]
			}
		}
	}
};

export default preview;
