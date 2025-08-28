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

			// Instead of just setting open = true, we need to trigger the proper opening mechanism
			// This ensures that the handleDropdownToggle event handler runs and calls handleAutoPlacement
			if (!detailsElement.open) {
				// Dispatch a toggle event to trigger the proper event handlers
				detailsElement.open = true;
				const toggleEvent = new Event('toggle', { bubbles: true });
				detailsElement.dispatchEvent(toggleEvent);
			}
		});

		// Wait for the auto-placement logic to complete, especially important for mobile
		// The handleAutoPlacement function uses a delay of 1ms, so we wait longer to ensure completion
		await page.waitForTimeout(50);
	}

	// Additional wait to ensure all mobile positioning and animations are complete
	await page.waitForTimeout(100);
};

test.describe('DBCustomSelect', () => {
	getDefaultScreenshotTest({ path, preScreenShot });
});
