import { type PlaywrightTestConfig } from '@playwright/test';

const showcaseConfig: PlaywrightTestConfig = {
	/* Retry on CI only */
	retries: process.env.CI ? 1 : 0,
	use: {
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
		actionTimeout: 0,
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: `http://localhost:8080/${process.env.showcase}/`,

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: process.env.CI ? 'on-first-retry' : 'on'
	},
	webServer: {
		command: `cd ${process.env.showcase} && pnpm run preview`,
		port: 8080,
		reuseExistingServer: !process.env.CI
	},

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	outputDir: `./${process.env.showcase}/test-results/`
};

export default showcaseConfig;
