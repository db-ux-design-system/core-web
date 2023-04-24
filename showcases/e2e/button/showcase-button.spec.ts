import { test, expect } from '@playwright/test';
// @ts-expect-error - vue can only find it with .ts as file ending
import { COLORS, TONALITIES } from '../fixtures/variants.ts';
// @ts-expect-error - vue can only find it with .ts as file ending
import { setScrollViewport } from '../fixtures/viewport.ts';

for (const tonality of TONALITIES) {
	for (const color of COLORS) {
		test(`Button should match screenshot for tonality "${tonality}" and color "${color}"`, async ({
			page
		}) => {
			await page.goto(`./#/button?tonality=${tonality}&color=${color}`);
			await setScrollViewport(page)();
			await expect(page).toHaveScreenshot({
				fullPage: true
			});
		});
	}
}
