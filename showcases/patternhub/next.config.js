/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: []
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	}
});

const transpiledPackages = Object.keys(packageJSON.dependencies).filter((it) =>
	it.includes('@db-ui')
);

const withTM = require('next-transpile-modules')(transpiledPackages);

const packageJSON = require('./package.json');

module.exports = withTM(
	withMDX({
		pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
	})
);
