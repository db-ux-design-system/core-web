/**
 * See https://playwright.dev/docs/test-configuration.
 */
import { devices } from '@playwright/test';

// TIMINGS (chromium, firefox): 15m/4.2m

const config = {
	testDir: '.',
	// Example: __snapshots__/foundations/chromium/Color-Screenshot.png
	snapshotPathTemplate:
		'{snapshotDir}/foundations/{projectName}/{arg}/{testName}{ext}',
	snapshotDir: '../../../__snapshots__',
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
		baseURL: `http://localhost:5173/`,

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: process.env.CI ? 'on-first-retry' : 'on'
	},
	webServer: {
		command: `pnpm run dev`,
		port: 5173,
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

		{
			name: 'webkit',
			use: {
				...devices['Desktop Safari']
			}
		},
		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
			}
		}
	],

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	outputDir: `../test-results/`
};

export default config;
