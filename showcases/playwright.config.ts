import { devices, type PlaywrightTestConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */

// TIMINGS (chromium, firefox): 15m/4.2m

const config: PlaywrightTestConfig = {
	testDir: './e2e',
	// Example: __snapshots__/alert/showcase/chromium/functional/neutral-0/DBAlert-should-match-screenshit.png
	snapshotPathTemplate:
		'{snapshotDir}/{testFileDir}/showcase/{projectName}/{arg}/{testName}{ext}',
	snapshotDir: './../__snapshots__',
	expect: {
		/**
		 * Maximum time expect() should wait for the condition to be met.
		 * For example in `await expect(locator).toHaveText();`
		 */
		timeout: 5000
	},
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: Boolean(process.env.CI),
	/* Retry on CI only */
	retries: process.env.CI ? 1 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: process.env.CI ? 'blob' : [['list'], ['html', { open: 'never' }]],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
		actionTimeout: 0,
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: `http://localhost:8080/${process.env.showcase}/`,

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: process.env.CI ? 'on-first-retry' : 'on'
	},
	webServer: {
		command: `cd ${process.env.showcase} && npm run preview`,
		port: 8080,
		reuseExistingServer: !process.env.CI
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
		/* {
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
			}
		}, */

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
	],

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	outputDir: `./${process.env.showcase}/test-results/`
};

export default config;
