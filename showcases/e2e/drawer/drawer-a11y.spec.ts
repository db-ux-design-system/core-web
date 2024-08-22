import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DBDrawer', () => {
	getA11yTest({
		path: '01/drawer',
		async preA11y(page) {
			await page.locator('main').getByRole('button').first().click();
			await page.waitForTimeout(1000);
		}
	});
});
