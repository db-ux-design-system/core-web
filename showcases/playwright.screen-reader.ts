import { screenReaderConfig } from '@guidepup/playwright';
import { devices, type PlaywrightTestConfig } from '@playwright/test';
import showcaseConfig from './playwright.showcase';

const defaultScreenReaderConfig: PlaywrightTestConfig = {
	...screenReaderConfig,
	...showcaseConfig,
	retries: process.env.CI ? 2 : 0,
	reportSlowTests: null,
	testDir: './screen-reader/tests',
	snapshotDir: './screen-reader/__snapshots__',
	timeout: 3 * 60 * 1000,
	webServer: {
		command: `cd ${process.env.showcase} && npm run start`,
		port: 8080,
		reuseExistingServer: !process.env.CI
	}
};

export default defaultScreenReaderConfig;
