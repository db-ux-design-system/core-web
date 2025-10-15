import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '06/notification';
test.describe('DBNotification', () => {
	getDefaultScreenshotTest({ path });
});
