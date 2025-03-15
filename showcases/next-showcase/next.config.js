// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/next-showcase',
	distDir: '../../build-showcases/next-showcase',
	transpilePackages: ['../react-showcase/', '@db-ux'],
	env: {
		NEXT_SHOWCASE_VARIANT: 'next',
		BASE_PATH: '/next-showcase'
	}
};

module.exports = nextConfig;
