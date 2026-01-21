import type { Preview } from '@storybook/react-vite';
import './global.css';

const preview: Preview = {
	parameters: {
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
		}
	}
};

export default preview;
