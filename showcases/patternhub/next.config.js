import { remarkCodeHike } from '@code-hike/mdx';
import remarkGfm from 'remark-gfm';
import generated from '@next/mdx';
import { getTheme } from './code-theme.js';

const withMDX = generated({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [
			remarkGfm,
			[
				remarkCodeHike,
				{
					theme: getTheme(),
					showCopyButton: true,
					showExpandButton: true
				}
			]
		],
		rehypePlugins: [],
		providerImportSource: '@mdx-js/react'
	}
});

const config = {
	output: 'export',
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
	transpilePackages: ['@db-ui'],
	...withMDX({
		pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
		eslint: { ignoreDuringBuilds: true }
	})
};

export default config;
