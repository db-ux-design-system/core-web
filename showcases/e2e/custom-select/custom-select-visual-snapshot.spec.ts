import { type Page, test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/custom-select';

const preScreenShot = async (page: Page) => {
	const components = await page
		.locator('main')
		.locator('.db-custom-select')
		.all();
	for (const component of components) {
		await component.evaluate((comp: HTMLElement) => {
			const detailsElement = comp.querySelector('details');
			detailsElement.dataset.test = 'true';
			detailsElement.open = true;
		});
	}
};

test.describe('DBCustomSelect', () => {
	getDefaultScreenshotTest({ path, preScreenShot });
});
