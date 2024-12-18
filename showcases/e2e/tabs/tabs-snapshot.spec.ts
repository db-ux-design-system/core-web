import { expect, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/tabs';

test.describe('DBTabs', () => {
	getDefaultScreenshotTest({
		path
	});
	runAriaSnapshotTest({
		path,
		async preScreenShot(page) {
			const scrollRight = page.locator('[data-icon=chevron_right]');
			await expect(scrollRight).toBeVisible();
		}
	});
});
