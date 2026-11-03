import type { Preview } from '@storybook/react-vite';
import './docs.css';
import './global.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		options: {
			// Getting Started first, then the Foundations and Guides pages in the
			// order of storybooks/_shared/foundations/pages.ts. The framework refs follow.
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
					],
					'Guides',
					[
						'Router Usage',
						'Custom Components',
						'Testing',
						'Validation',
						'Backdrop'
					]
				]
			}
		}
	}
};

export default preview;
