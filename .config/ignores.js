const ignoreFolders = [
	'node_modules/**/*',
	'build/**/*',
	'.config/**/*',
	'public/**/*',
	'out/**/*',
	'helpers/**/*',
	'dist/**/*',
	'packages/components/**/*',
	'packages/foundations/**/*',
	'packages/migration/**/*',
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
	'storybooks/**/.storybook/**/*',
	'**/vitest.config.ts'
];

export default ignoreFolders;
