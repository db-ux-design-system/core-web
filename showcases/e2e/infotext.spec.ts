import { test, expect } from '@playwright/test';
import { COLORS, TONALITIES } from './fixtures/variants.ts';

for (const tonality of TONALITIES) {
	for (const color of COLORS) {
		test(`Infotext should match screenshot for tonality "${tonality}" and color "${color}"`, async ({
			page
		}) => {
			await page.goto(`./#/infotext?tonality=${tonality}&color=${color}`);
			await expect(page).toHaveScreenshot({ fullPage: true });
		});
	}
}
