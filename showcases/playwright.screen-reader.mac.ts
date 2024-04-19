import { screenReaderConfig } from '@guidepup/playwright';
import { devices, type PlaywrightTestConfig } from '@playwright/test';
import showcaseConfig from './playwright.showcase';

const config: PlaywrightTestConfig = {
	...screenReaderConfig,
	reportSlowTests: null,
	testDir: './screen-reader/macos',
	timeout: 3 * 60 * 1000,
	retries: 2,
	projects: [
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'], headless: false }
		}
	],
	...showcaseConfig
};

export default config;
