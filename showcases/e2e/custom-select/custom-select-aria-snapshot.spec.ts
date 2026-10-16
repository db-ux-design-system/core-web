import { type Page, test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '03/custom-select';

const preScreenShot = async (page: Page) => {
	/* eslint-disable unicorn/isolated-functions -- document and HTMLDetailsElement are available in the browser context */
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
	/* eslint-enable unicorn/isolated-functions */
};

test.describe('DBCustomSelect', () => {
	runAriaSnapshotTest({ path, preScreenShot });
});
