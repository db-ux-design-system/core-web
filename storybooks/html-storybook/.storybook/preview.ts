import type { Decorator, Preview } from '@storybook/react-vite';
import * as prettierHtml from 'prettier/plugins/html';
import * as prettier from 'prettier/standalone';
import AutodocsPage from './autodocs-page.mdx';
import './global.css';
import { htmlCaptureDecorator, htmlSourceMap } from './html-capture-decorator';
import { applyMode, modeGlobalTypes, modeInitialGlobals } from './mode';

const withMode: Decorator = (Story, { globals }) => {
	applyMode(globals);
	return Story();
};

const preview: Preview = {
	globalTypes: modeGlobalTypes,
	initialGlobals: modeInitialGlobals,
	decorators: [htmlCaptureDecorator, withMode],
	parameters: {
		options: {
			// The component overview page comes first in every component group.
			// A function here, because the `order` object (as in the other
			// Storybooks) left the overview last in this Storybook, whose stories
			// come from two folders.
			storySort: (a, b) => {
				// Plain JavaScript: Storybook evaluates this function on its own.
				const rank = (entry) =>
					entry.title === 'Getting Started'
						? 0
						: entry.title.endsWith('/Overview')
							? 1
							: 2;
				const [groupA, groupB] = [a, b].map((entry) =>
					entry.title.split('/').slice(0, -1).join('/')
				);
				if (groupA !== groupB) {
					return rank(a) === 0 || rank(b) === 0
						? rank(a) - rank(b)
						: groupA.localeCompare(groupB);
				}
				return rank(a) - rank(b) || a.title.localeCompare(b.title);
			}
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			},
			disable: true
		},
		docs: {
			// Example pages without the properties table, see autodocs-page.mdx.
			page: AutodocsPage,
			toc: {
				headingSelector: 'h1, h3',
				title: 'Table of Contents'
			},
			source: {
				transform: async (
					_code: string,
					storyContext: { id: string }
				) => {
					const html = htmlSourceMap.get(storyContext.id);
					if (!html) {
						return '<!-- HTML output not available -->';
					}
					return prettier.format(html, {
						parser: 'html',
						plugins: [prettierHtml],
						useTabs: true,
						printWidth: 80
					});
				},
				language: 'html'
			}
		}
	}
};

export default preview;
