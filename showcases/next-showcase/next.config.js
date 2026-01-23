/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/next-showcase',
	distDir: '../../build-showcases/next-showcase',
	transpilePackages: ['../react-showcase/', '@db-ux'],
	env: {
		NEXT_SHOWCASE_VARIANT: 'next',
		BASE_PATH: '/next-showcase'
	},
	sassOptions: {
		includePaths: ['node_modules']
	}
};

module.exports = nextConfig;
