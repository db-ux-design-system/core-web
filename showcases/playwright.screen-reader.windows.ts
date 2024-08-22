import { devices, type PlaywrightTestConfig } from '@playwright/test';
import defaultScreenReaderConfig from './playwright.screen-reader';

const config: PlaywrightTestConfig = {
	...defaultScreenReaderConfig,
	snapshotPathTemplate:
		'{snapshotDir}/{testFileDir}/windows/{projectName}/{arg}{ext}',
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'], headless: false }
		}
	]
};

export default config;
