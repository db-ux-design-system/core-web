import { expect, test } from '@playwright/test';

test.describe('Colors', () => {
	test(`should match screenshot`, async ({ page }) => {
		await page.goto(`dev/colors.html`);
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
