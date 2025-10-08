const ignoreFolders = [
	'node_modules/**/*',
	'build/**/*',
	'.config/**/*',
	'public/**/*',
	'out/**/*',
	'helpers/**/*',
	'dist/**/*',
	'packages/**/*',
	'showcases/patternhub/pages/components/**/*',
	'showcases/nuxt-showcase/**/*',
	'showcases/next-showcase/**/*',
	'showcases/angular-ssr-showcase/**/*',
	'build-outputs/**/*',
	'build-showcases/**/*',
	'output/**/*',
	'**/playwright.*.ts',
	'playwright-report/**/*'
];

export default ignoreFolders;
