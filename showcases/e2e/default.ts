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
				await page.goto(
					`./#/${component}?tonality=${tonality}&color=${color}`,
					{ waitUntil: 'networkidle' }
				);
				await setScrollViewport(page)();
				await expect(page).toHaveScreenshot({
					fullPage: true,
					// TODO: There is some issue with webkit
					maxDiffPixels: isWebkit ? 6 : 1,
					maxDiffPixelRatio: isWebkit ? 0.02 : 0
				});
			});
		}
	}
};
