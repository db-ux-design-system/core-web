// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import remarkGfm from 'remark-gfm';
import generated from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkTransformLinks from './scripts/remark-transform-links.js';

const withMDX = generated({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm, remarkTransformLinks],
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
		'@db-ux'
	],
	...withMDX({
		pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
		eslint: { ignoreDuringBuilds: true }
	}),
	env: {
		BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
		NEXT_SHOWCASE_VARIANT: 'next',
		REDIRECT_URL_SEARCH_PARAMS: 'false',
		NEXT_PUBLIC_APP_NAME: 'DB UX',
		NEXT_PUBLIC_GITHUB_VERSION_SWITCHER: true,
		NEXT_PUBLIC_GITHUB_OWNER: 'db-ux-design-system',
		NEXT_PUBLIC_GITHUB_REPO: 'core-web'
	}
};

export default config;
