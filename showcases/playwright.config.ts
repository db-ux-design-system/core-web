import {
	devices,
	type PlaywrightTestConfig,
	type Project
} from '@playwright/test';
import showcaseConfig from './playwright.showcase';

const projects: Project[] = [
	{
		name: 'chromium',
		use: {
			...devices['Desktop Chrome']
		}
	},
	{
		name: 'chromium-highContrast',
		use: {
			browserName: 'chromium',
			colorScheme: 'dark',
			contextOptions: { forcedColors: 'active' }
		}
	},
	{
		name: 'firefox',
		use: {
			...devices['Desktop Firefox']
		}
	},
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
			...devices['Pixel 5'],
			isMobile: true
		}
	}
];

// There is an issue with stencil not working with webkit mobile
// Some screens differ for each snapshot
if (!process.env.showcase?.startsWith('stencil')) {
	projects.push({
		name: 'mobile_safari',
		use: {
			...devices['iPhone 12 Pro Max'],
			isMobile: true
		}
	});
}

const config: PlaywrightTestConfig = {
	testDir: './e2e',
	// Example: __snapshots__/notification/showcase/chromium/functional/neutral-0/DBNotification-should-match-screenshot.png
	snapshotPathTemplate:
		'{snapshotDir}/{testFileDir}/showcase/{projectName}/{arg}/{testName}{ext}',
	snapshotDir: './../__snapshots__',
	expect: {
		timeout: 30_000
	},
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: Boolean(process.env.CI),
	/*
	 * EXPERIMENT: use half the runner's cores on CI instead of a single worker,
	 * to measure whether parallelism speeds up the showcase e2e suites. Playwright
	 * recommends workers: 1 on CI for stability, and standard hosted ubuntu runners
	 * are 2-core (so '50%' == 1 there); the interesting case is the Playwright
	 * container jobs if they have more cores. Watch the run for timeouts/flakiness.
	 */
	workers: process.env.CI ? '50%' : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: process.env.CI ? 'blob' : [['list'], ['html', { open: 'never' }]],
	/* Configure projects for major browsers */
	projects,
	...showcaseConfig
};

export default config;
