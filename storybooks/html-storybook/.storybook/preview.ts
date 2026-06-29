import type {Preview} from '@storybook/react-vite';
import * as prettierHtml from 'prettier/plugins/html';
import * as prettier from 'prettier/standalone';
import './global.css';
import {htmlCaptureDecorator, htmlSourceMap} from './html-capture-decorator';

const preview: Preview = {
	decorators: [htmlCaptureDecorator],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			disable: true,
		},
		docs: {
			toc: {
				headingSelector: 'h1, h3',
				title: 'Table of Contents',
			},
			source: {
				transform: async (_code: string, storyContext: {id: string}) => {
					const html = htmlSourceMap.get(storyContext.id);
					if (!html) {
						return '<!-- HTML output not available -->';
					}
					return prettier.format(html, {
						parser: 'html',
						plugins: [prettierHtml],
						useTabs: true,
						printWidth: 80,
					});
				},
				language: 'html',
			},
		},
	},
};

export default preview;
