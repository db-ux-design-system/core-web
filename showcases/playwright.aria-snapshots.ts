import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';

const showcaseAriaSnapshotConfig: PlaywrightTestConfig = {
	...config,
	testMatch: '*-aria-snapshot.spec.ts'
};

export default showcaseAriaSnapshotConfig;
