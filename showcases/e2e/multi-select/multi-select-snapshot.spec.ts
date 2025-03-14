import { type Page, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '03/multi-select';

// TODO: Don't skip for angular when signals are implemented
const skip = { angular: true };

const preScreenShot = async (page: Page) => {
	const components = await page
		.locator('main')
		.locator('.db-multi-select')
		.all();
	for (const component of components) {
		await component.evaluate((comp: HTMLElement) => {
			comp.querySelector('details').open = true;
		});
	}
};

test.describe('DBMultiSelect', () => {
	getDefaultScreenshotTest({ path, skip, preScreenShot });
	runAriaSnapshotTest({ path, skip, preScreenShot });
});
