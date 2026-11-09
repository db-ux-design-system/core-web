import type { Decorator, Preview } from '@storybook/react-vite';
import './global.css';
import { applyMode, modeGlobalTypes, modeInitialGlobals } from './mode';
import { docsTheme } from './theme';

// Light Mode by default like the framework Storybooks, so the Foundations
// examples do not follow an OS in dark mode on the light docs page (mode.ts).
const withMode: Decorator = (Story, { globals }) => {
	applyMode(globals);
	return Story();
};

const preview: Preview = {
	globalTypes: modeGlobalTypes,
	initialGlobals: modeInitialGlobals,
	decorators: [withMode],
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
