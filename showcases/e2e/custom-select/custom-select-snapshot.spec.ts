import { type Page, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '03/custom-select';

const preScreenShot = async (page: Page) => {
	const components = await page
		.locator('main')
		.locator('.db-custom-select')
		.all();
	for (const component of components) {
		await component.evaluate((comp: HTMLElement) => {
			comp.querySelector('details').open = true;
		});
	}
};

test.describe('DBCustomSelect', () => {
	getDefaultScreenshotTest({ path, preScreenShot });
	runAriaSnapshotTest({ path, preScreenShot });
});
