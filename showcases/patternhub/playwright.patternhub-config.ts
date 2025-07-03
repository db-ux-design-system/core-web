import { devices, type PlaywrightTestConfig } from '@playwright/test';
import config from '../playwright.config';

const patternHubConfig: PlaywrightTestConfig = {
	...config,
	snapshotDir: './../../__snapshots__',
	testDir: './tests',
	// Example: __snapshots__/notification/patternhub/chromium/DBNotification-should-match-screenshot.png
	snapshotPathTemplate: '{snapshotDir}/{arg}/{testName}{ext}',
	// We reduce amount of tests, just testing if site is reachable and content is available
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		}
	],
	webServer: {
		command: `npx http-server ../../build-showcases${process.env.NEXT_PUBLIC_BASE_PATH ? '' : '/patternhub'}`,
		port: 8080,
		reuseExistingServer: !process.env.CI
	},
	use: {
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
		actionTimeout: 0,
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: `http://localhost:8080${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/`,

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: process.env.CI ? 'on-first-retry' : 'on'
	},
	outputDir: `./test-results/`
};

export default patternHubConfig;
