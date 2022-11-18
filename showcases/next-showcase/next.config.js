/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules');
const packageJSON = require('./package.json');

const transpiledPackages = Object.keys(packageJSON.dependencies).filter((it) =>
	it.includes('@db-ui')
);

module.exports = withTM(transpiledPackages);
