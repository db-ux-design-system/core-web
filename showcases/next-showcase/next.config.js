/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/next-showcase',
	distDir: '../../build-showcases/next-showcase',
	transpilePackages: ['../react-showcase/', '@db-ux'],
	webpack: (config) => {
		// The React output source uses explicit `.js` extensions in its
		// relative imports (added by the Mitosis esm-extensions plugin), but
		// the showcase consumes it as raw TypeScript via transpilePackages.
		// Map `.js` specifiers back to `.ts`/`.tsx` so Webpack can resolve them.
		config.resolve.extensionAlias = {
			...config.resolve.extensionAlias,
			'.js': ['.ts', '.tsx', '.js']
		};
		return config;
	},
	env: {
		NEXT_SHOWCASE_VARIANT: 'next',
		BASE_PATH: '/next-showcase'
	}
};

module.exports = nextConfig;
