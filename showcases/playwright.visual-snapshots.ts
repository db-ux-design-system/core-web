import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';

const showcaseSnapshotConfig: PlaywrightTestConfig = {
	...config,
	testMatch: '*-visual-snapshot.spec.ts'
};

export default showcaseSnapshotConfig;
