import { screenReaderConfig } from '@guidepup/playwright';
import { devices, type PlaywrightTestConfig } from '@playwright/test';
import showcaseConfig from './playwright.showcase';

const config: PlaywrightTestConfig = {
	...screenReaderConfig,
	reportSlowTests: null,
	testDir: './screen-reader/windows',
	snapshotPathTemplate: '{snapshotDir}/{testFileDir}/{arg}/{testName}{ext}',
	snapshotDir: './screen-reader/windows/__snapshots__',
	timeout: 3 * 60 * 1000,
	retries: 2,
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'], headless: false }
		}
	],
	...showcaseConfig
};

export default config;
