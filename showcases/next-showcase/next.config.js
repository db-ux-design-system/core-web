/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/next-showcase',
	distDir: '../../build-showcases/next-showcase',
	transpilePackages: ['../react-showcase/', '@db-ux'],
	env: {
		NEXT_SHOWCASE_VARIANT: 'next-ssr',
		BASE_PATH: '/next-showcase'
	}
};

module.exports = nextConfig;
