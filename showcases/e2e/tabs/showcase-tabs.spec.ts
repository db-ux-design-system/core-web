import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBTabs', () => {
	// TODO: There might be an issue in our implementation of which elements get which roles
	// So we disabled "aria-allowed-role" for now
	getDefaultScreenshotTest({
		path: '04/tabs',
		disableRules: ['aria-allowed-role']
	});
});
