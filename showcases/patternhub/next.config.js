import remarkGfm from 'remark-gfm';

import generated from '@next/mdx';

const withMDX = generated({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [remarkGfm],
		rehypePlugins: []
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	}
});

const config = {
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
	transpilePackages: ['@db-ui'],
	...withMDX({
		pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
	})
};

export default config;
