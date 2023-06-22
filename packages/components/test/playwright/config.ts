import { defineConfig, devices } from '@playwright/experimental-ct-react';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config = defineConfig({
	testDir: './src/components',
	/* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
	snapshotDir: './../../__snapshots__',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: Boolean(process.env.CI),
	/* Retry on CI only */
	retries: process.env.CI ? 1 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: process.env.CI
		? [['github'], ['html', { open: 'never' }]]
		: [['list'], ['html', { open: 'never' }]],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
		/* Port to use for Playwright component endpoint. */
		ctPort: 3100,
		/* Playwright Test can record videos for your tests, controlled by the video option. By default videos are off. */
		video: 'on-first-retry'
	},
	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		},
		// TODO: Enable this again when Mozilla introduces :has selector
		/*		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
			}
		},*/
		{
			name: 'webkit',
			use: {
				...devices['Desktop Safari']
			}
		},
		/* Test against mobile viewports. */
		{
			name: 'mobile_chrome',
			use: {
				...devices['Pixel 5']
			}
		},
		{
			name: 'mobile_safari',
			use: {
				...devices['iPhone 12']
			}
		}
	]
});

export default config;
