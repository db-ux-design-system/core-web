import generated from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkTransformLinks from './scripts/remark-transform-links.js';

const withMDX = generated({
	extension: /\.mdx?$/v,
	options: {
		remarkPlugins: [remarkGfm, remarkTransformLinks],
		rehypePlugins: [rehypeSlug],
		providerImportSource: '@mdx-js/react',
	},
});

const mdxConfig = withMDX({
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});

// Wrap (instead of replace) the webpack function that `withMDX` provides, so
// the MDX loaders stay registered. Replacing the `webpack` key here would drop
// them and break `.md`/`.mdx` parsing.
const withExtensionAlias = (mdxWebpack) => (webpackConfig, options) => {
	const updatedConfig = mdxWebpack
		? mdxWebpack(webpackConfig, options)
		: webpackConfig;

	// The React output source uses explicit `.js` extensions in its relative
	// imports (added by the Mitosis esm-extensions plugin), but Patternhub
	// consumes it as raw TypeScript via transpilePackages. Map `.js` specifiers
	// back to `.ts`/`.tsx` so Webpack can resolve them.
	updatedConfig.resolve.extensionAlias = {
		...updatedConfig.resolve.extensionAlias,
		'.js': ['.ts', '.tsx', '.js'],
	};
	return updatedConfig;
};

const config = {
	output: 'export',
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
	transpilePackages: ['../../output/react/src', '../react-showcase/', '@db-ux'],
	...mdxConfig,
	webpack: withExtensionAlias(mdxConfig.webpack),
	env: {
		BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
		NEXT_SHOWCASE_VARIANT: 'next',
		REDIRECT_URL_SEARCH_PARAMS: 'false',
		NEXT_PUBLIC_APP_NAME: 'DB UX',
		NEXT_PUBLIC_GITHUB_VERSION_SWITCHER: 'true',
		NEXT_PUBLIC_GITHUB_OWNER: 'db-ux-design-system',
		NEXT_PUBLIC_GITHUB_REPO: 'core-web',
	},
};

export default config;
