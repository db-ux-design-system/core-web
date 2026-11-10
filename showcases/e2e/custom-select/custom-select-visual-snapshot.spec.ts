import { type Page, test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

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

			/*
			 * Skip the adaptive color x material matrix (only rendered in adaptive
			 * mode). It holds dozens of custom-selects; force-opening every dropdown
			 * produces a huge, overlapping, never-stabilizing render that makes
			 * toHaveScreenshot time out. The matrix documents the CLOSED control's
			 * coloring per combination, so its dropdowns must stay closed.
			 */
			if (detailsElement.closest('.adaptive-matrix')) {
				continue;
			}

			detailsElement.dataset.test = 'true';
			detailsElement.open = true;
		}
	});
	/* eslint-enable unicorn/isolated-functions */
};

test.describe('DBCustomSelect', () => {
	getDefaultScreenshotTest({ path, preScreenShot });
});
