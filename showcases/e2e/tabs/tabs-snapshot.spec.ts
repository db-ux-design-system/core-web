import { expect, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/tabs';

test.describe('DBTabs', () => {
	getDefaultScreenshotTest({
		path
	});
	runAriaSnapshotTest({
		path,
		async preScreenShot(page, project) {
			if (
				(project.name === 'webkit' ||
					project.name === 'mobile_safari') &&
				process.env.showcase.startsWith('vue')
			) {
				// There is a bug in webkit where the scroll buttons are not visible 50% of the time
				// Probably due to the scrollWidth or clientWidth not being calculated correctly
				// Only in Vue
				// TODO: Investigate further
				test.skip();
			}

			const scrollRight = page.locator('[data-icon=chevron_right]');
			await expect(scrollRight).toBeVisible();
		}
	});
});
