import { expect, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { COLORS, TONALITIES } from './fixtures/variants.ts';
// @ts-expect-error - required for playwright
import { setScrollViewport } from './fixtures/viewport.ts';

export const getDefaultScreenshotTest = (component: string) => {
	for (const tonality of TONALITIES) {
		for (const color of COLORS) {
			test(`should match screenshot for tonality "${tonality}" and color "${color}"`, async ({
				page
			}, testInfo) => {
				const isWebkit =
					testInfo.project.name === 'webkit' ||
					testInfo.project.name === 'mobile_safari';
				const showcase = process.env.showcase;

				let maxDiffPixels = 1;

				if (isWebkit) {
					maxDiffPixels = showcase.startsWith('angular') ? 1000 : 6;
				}

				await page.goto(
					`./#/${component}?tonality=${tonality}&color=${color}`,
					{ waitUntil: 'networkidle' }
				);
				await setScrollViewport(page)();
				await expect(page).toHaveScreenshot({
					fullPage: true,
					maxDiffPixels
				});
			});
		}
	}
};
