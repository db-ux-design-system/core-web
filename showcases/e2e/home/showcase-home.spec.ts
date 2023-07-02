import { test, expect } from '@playwright/test';

test.describe('Home', () => {
	test('has title', async ({ page }) => {
		await page.goto('./');
		await expect(page).toHaveTitle('Showcase');
	});
	// TODO write separate form functionality tests without screenshots
});
