import { test, expect } from '@playwright/test';
import { COLORS, TONALITIES } from './fixtures/variants.ts';

test('homepage has title', async ({ page }) => {
	await page.goto('./');
	await expect(page).toHaveTitle('React Showcase');
});

for (const tonality of TONALITIES) {
	for (const color of COLORS) {
		test(`Homepage should match screenshot for tonality "${tonality}" and color "${color}"`, async ({
			page
		}) => {
			await page.goto(`./#/?tonality=${tonality}&color=${color}`);
			await expect(page).toHaveScreenshot({ fullPage: true });
		});
	}
}
