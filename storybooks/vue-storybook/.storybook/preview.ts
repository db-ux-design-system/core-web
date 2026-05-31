import type { Preview } from '@storybook/vue3-vite';
import { StoryContext } from 'storybook/internal/csf';
import './global.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		actions: { argTypesRegex: '^on.*' },
		docs: {
			toc: {
				headingSelector: 'h1, h3',
				title: 'Table of Contents'
			},
			source: {
				transform: (code: string, context: StoryContext) => {
					return code
						.replaceAll(
							`<${context.component.__name}`,
							`<${context.component.name}`
						)
						.replaceAll(
							`</${context.component.__name}`,
							`</${context.component.name}`
						);
				}
			}
		}
	}
};

export default preview;
