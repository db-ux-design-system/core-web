import { devices, type PlaywrightTestConfig } from '@playwright/test';
import defaultScreenReaderConfig from './playwright.screen-reader';

const config: PlaywrightTestConfig = {
	...defaultScreenReaderConfig,
	snapshotPathTemplate:
		'{snapshotDir}/{testFileDir}/macos/{projectName}/{testName}{ext}',
	projects: [
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'], headless: false }
		},
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'], headless: false }
		}
	]
};

export default config;
