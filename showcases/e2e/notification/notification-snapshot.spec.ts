import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBNotification', () => {
	getDefaultScreenshotTest({ path: '06/notification' });
});
