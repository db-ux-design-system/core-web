import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBDrawer', () => {
	getDefaultScreenshotTest({
		path: '01/drawer',
		async preA11y(page) {
			await page.locator('main').getByRole('button').first().click();
			await page.waitForTimeout(1000);
		}
	});
});
