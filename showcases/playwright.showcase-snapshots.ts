import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';

const showcaseSnapshotConfig: PlaywrightTestConfig = {
	...config,
	testMatch: '*-snapshot.spec.ts'
};

export default showcaseSnapshotConfig;
