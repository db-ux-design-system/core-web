import remarkGfm from 'remark-gfm';
import generated from '@next/mdx';
import rehypeSlug from 'rehype-slug';

const withMDX = generated({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug],
		providerImportSource: '@mdx-js/react'
	}
});

const config = {
	output: 'export',
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
	transpilePackages: [
		'../../output/react/src',
		'../react-showcase/',
		'@db-ui'
	],
	...withMDX({
		pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
		eslint: { ignoreDuringBuilds: true }
	}),
	env: {
		BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
		NEXT_SHOWCASE_VARIANT: 'next',
		REDIRECT_URL_SEARCH_PARAMS: 'false'
	}
};

export default config;
