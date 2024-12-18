import { expect, test } from '@playwright/test';

test.describe('Colors', () => {
	test(`should match screenshot`, async ({ page }) => {
		await page.goto(`src/colors.html`);
		await expect(page).toHaveScreenshot({ fullPage: true });
	});
});
