import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import { type StoryContext } from 'storybook/internal/csf';
import docJson from '../src/components/documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/iv,
				date: /date$/iv
			}
		},
		actions: { argTypesRegex: '^on.*' },
		docs: {
			toc: {
				headingSelector: 'h1, h3',
				title: 'Table of Contents'
			},
			source: {
				async transform(code: string, context: StoryContext) {
					let result = code;
					for (const [key, value] of Object.entries(
						context['allArgs'] as Record<string, unknown>
					)) {
						result = result
							.replaceAll(`"${key}"`, `"${String(value)}"`)
							.replaceAll(`[${key}]`, (substring) => {
								if (!substring.startsWith('[attr.')) {
									return key;
								}

								return substring;
							})
							.replaceAll(`this['${key}']`, `'${String(value)}'`);
					}

					return result;
				}
			}
		}
	}
};

export default preview;
