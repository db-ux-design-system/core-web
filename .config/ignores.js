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
	'**/test/**/*',
	'**/playwright.*.ts',
	'figma-code-connect',
	'playwright-report/**/*',
	'storybooks/**/.storybook/**/*'
];

export default ignoreFolders;
