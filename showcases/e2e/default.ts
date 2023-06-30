import { expect, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { COLORS, TONALITIES } from './fixtures/variants.ts';
// @ts-expect-error - required for playwright
import { setScrollViewport } from './fixtures/viewport.ts';

export const getDefaultScreenshotTest = (path: string) => {
	for (const tonality of TONALITIES) {
		for (const color of COLORS) {
			test(`should match screenshot`, async ({ page }, testInfo) => {
				const isWebkit =
					testInfo.project.name === 'webkit' ||
					testInfo.project.name === 'mobile_safari';
				const isFirefox = testInfo.project.name === 'firefox';
				const showcase = process.env.showcase;
				const isAngular = showcase.startsWith('angular');

				const config: any = {
					fullPage: true
				};

				if (isWebkit) {
					config.maxDiffPixels = isAngular ? 1000 : 6;
				} else if (isFirefox && isAngular) {
					config.maxDiffPixelRatio = 0.05;
					config.maxDiffPixels = 100;
				} else {
					config.maxDiffPixels = 1;
				}

				await page.goto(
					`./#/${path}?tonality=${tonality}&color=${color}`,
					{ waitUntil: 'networkidle' }
				);
				await setScrollViewport(page)();
				await expect(page).toHaveScreenshot(
					[tonality, `${color}.png`],
					config
				);
			});
		}
	}
};
