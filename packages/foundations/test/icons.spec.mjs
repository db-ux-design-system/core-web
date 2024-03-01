import { expect, test } from '@playwright/test';

test.describe('Icons', () => {
	test(`should match screenshot`, async ({ page }) => {
		await page.goto(`src/icons.html`);
		await page.waitForTimeout(1000);
		await expect(page).toHaveScreenshot({ fullPage: true });
	});
});
