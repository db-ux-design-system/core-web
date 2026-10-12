import { type Page, test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/custom-select';

const preScreenShot = async (page: Page) => {
	await page.evaluate(() => {
		const detailsElements = document.querySelectorAll(
			'main .db-custom-select details'
		);
		for (const detailsElement of detailsElements) {
			if (!(detailsElement instanceof HTMLDetailsElement)) {
				continue;
			}

			detailsElement.dataset.test = 'true';
			detailsElement.open = true;
		}
	});
};

test.describe('DBCustomSelect', () => {
	getDefaultScreenshotTest({ path, preScreenShot });
});
