import { expect, test } from '@playwright/test';

test.describe('Icons', () => {
	test(`should match screenshot`, async ({ page }) => {
		await page.goto(`dev/icons.html`);
		await page.waitForTimeout(1000);
		// Force Arial font for all elements to ensure consistent rendering across environments
		await page.addStyleTag({
			content: `
				* {
					font-family: Arial, sans-serif !important;
				}
			`
		});
		await expect(page).toHaveScreenshot({ fullPage: true });
	});
});
