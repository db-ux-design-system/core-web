import { screenReaderConfig } from '@guidepup/playwright';
import { devices, type PlaywrightTestConfig } from '@playwright/test';
import showcaseConfig from './playwright.showcase';

const defaultScreenReaderConfig: PlaywrightTestConfig = {
	...screenReaderConfig,
	...showcaseConfig,
	reportSlowTests: null,
	testDir: './screen-reader/tests',
	snapshotDir: './screen-reader/__snapshots__',
	timeout: 3 * 60 * 1000
};

export default defaultScreenReaderConfig;
