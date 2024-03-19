import { expect, test } from '@playwright/test';

test.describe('Fonts', () => {
	test(`should match screenshot`, async ({ page }) => {
		await page.goto(`src/fonts.html`);
		await expect(page).toHaveScreenshot({ fullPage: true });
	});
});
