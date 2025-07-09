import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';

const a11yCheckerConfig: PlaywrightTestConfig = {
	...config,
	testMatch: '*-a11y-checker.spec.ts'
};

export default a11yCheckerConfig;
