import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/tab-item';
test.describe('DBTabItem', () => {
	getDefaultScreenshotTest({
		path
	});
});
