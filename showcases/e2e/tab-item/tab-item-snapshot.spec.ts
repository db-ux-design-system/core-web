import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBTabItem', () => {
	getDefaultScreenshotTest({
		path: '04/tab-item'
	});
});
