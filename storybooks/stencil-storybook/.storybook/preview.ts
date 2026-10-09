import { defineCustomElements } from '@db-ux/wc-core-components/bundle/index.js';
import type { Preview } from '@storybook/web-components-vite';
import * as prettierHtml from 'prettier/plugins/html';
import * as prettier from 'prettier/standalone';
import './global.css';
import { htmlCaptureDecorator, htmlSourceMap } from './html-capture-decorator';

// Register every `<db-*>` custom element once for the whole Storybook, the same
// way the stencil-showcase does in its index.html. Stories only reference the
// elements by tag, so they rely on this global registration.
defineCustomElements();

const preview: Preview = {
	decorators: [htmlCaptureDecorator],
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
			},
			source: {
				// Show the real rendered custom-element markup (captured by the
				// decorator) instead of the lit render function, prettified the
				// same way as the html-storybook.
				transform: async (
					_code: string,
					storyContext: { id: string }
				) => {
					const renderedHtml = htmlSourceMap.get(storyContext.id);
					if (!renderedHtml) {
						return '<!-- HTML output not available -->';
					}
					return prettier.format(renderedHtml, {
						parser: 'html',
						plugins: [prettierHtml],
						useTabs: true,
						printWidth: 80,
						// Treat all whitespace as significant so prettier never
						// injects line breaks inside a `<db-*>` element. Those
						// breaks would otherwise render as real whitespace when a
						// user copies the snippet (web-component text content is
						// whitespace-sensitive).
						htmlWhitespaceSensitivity: 'strict'
					});
				},
				language: 'html'
			}
		}
	}
};

export default preview;
