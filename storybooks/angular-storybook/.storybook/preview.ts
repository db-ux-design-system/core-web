import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import { StoryContext } from 'storybook/internal/csf';
import docJson from '../src/components/documentation.json';
setCompodocJson(docJson);

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

					return result;
				}
			}
		}
	}
};

export default preview;
