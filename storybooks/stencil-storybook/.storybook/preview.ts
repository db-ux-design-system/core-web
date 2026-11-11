import { defineCustomElements } from '@db-ux/wc-core-components/bundle/index.js';
import type { Decorator, Preview } from '@storybook/web-components-vite';
import * as prettierHtml from 'prettier/plugins/html';
import * as prettier from 'prettier/standalone';
import AutodocsPage from './autodocs-page.mdx';
import './global.css';
import { htmlCaptureDecorator, htmlSourceMap } from './html-capture-decorator';
import { applyMode, modeGlobalTypes, modeInitialGlobals } from './mode';
import { addSourceImports } from './source-imports';
import { docsTheme } from './theme';

const withMode: Decorator = (storyFn, { globals }) => {
	applyMode(globals);
	return storyFn();
};

// Register every `<db-*>` custom element once for the whole Storybook, the same
// way the stencil-showcase does in its index.html. Stories only reference the
// elements by tag, so they rely on this global registration.
defineCustomElements();

const preview: Preview = {
	globalTypes: modeGlobalTypes,
	initialGlobals: modeInitialGlobals,
	decorators: [htmlCaptureDecorator, withMode],
	parameters: {
		options: {
			// The component overview page comes first in every component group.
			storySort: {
				order: [
					'Getting Started',
					'Components',
					['*', ['Overview', '*']]
				]
			}
		},
		actions: { argTypesRegex: '^on.*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			// Colors and fonts of the design system, see theme.ts.
			theme: docsTheme,
			// Example pages without the properties table, see autodocs-page.mdx.
			page: AutodocsPage,
			toc: {
				// No visible title, like the platform TOC. Without a title Storybook
				// keeps a visually hidden "Table of contents" heading.
				headingSelector: 'h1, h3'
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
					const formatted = await prettier.format(renderedHtml, {
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
					// "Show code" with the script that registers the elements.
					return addSourceImports(formatted, 'webcomponents');
				},
				language: 'html'
			}
		}
	}
};

export default preview;
