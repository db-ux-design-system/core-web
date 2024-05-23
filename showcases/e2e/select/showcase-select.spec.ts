import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBSelect', () => {
	// TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
	getDefaultScreenshotTest({
		path: '03/select',
		disableRules: ['color-contrast']
	});
});
