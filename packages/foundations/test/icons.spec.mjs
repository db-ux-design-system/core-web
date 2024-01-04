import { expect, test } from '@playwright/test';

test.describe('Icons', () => {
	test(`should match screenshot`, async ({ page }) => {
		await page.goto(`src/icons.html`);
		await expect(page).toHaveScreenshot({ fullPage: true });
	});
});
