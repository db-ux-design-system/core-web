import { expect, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { COLORS, DENSITIES } from './fixtures/variants.ts';
// @ts-expect-error - required for playwright
import { setScrollViewport } from './fixtures/viewport.ts';

export const getDefaultScreenshotTest = (
	path: string,
	fixedHeight?: number
) => {
	for (const density of DENSITIES) {
		for (const color of COLORS) {
			test(`should match screenshot`, async ({ page }, testInfo) => {
				const isWebkit =
					testInfo.project.name === 'webkit' ||
					testInfo.project.name === 'mobile_safari';
				const showcase = process.env.showcase;
				const isAngular = showcase.startsWith('angular');

				const header = await page.locator('header');

				const config: any = {
					fullPage: true,
					mask: [header]
				};

				if (isAngular) {
					config.maxDiffPixels = 1000;
				} else if (isWebkit) {
					config.maxDiffPixels = 120;
				} else {
					config.maxDiffPixels = 1;
				}

				await page.goto(
					`./#/${path}?density=${density}&color=${color}`,
					{ waitUntil: 'networkidle' }
				);
				await setScrollViewport(page, fixedHeight)();
				await expect(page).toHaveScreenshot(
					[density, `${color}.png`],
					config
				);
			});
		}
	}
};
