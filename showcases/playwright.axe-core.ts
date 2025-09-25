import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';

const axeCoreConfig: PlaywrightTestConfig = {
	...config,
	testMatch: '*-axe-core.spec.ts'
};

export default axeCoreConfig;
