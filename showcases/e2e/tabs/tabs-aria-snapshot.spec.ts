import { expect, test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/tabs';

const preScreenShot = async (page, project) => {
	if (project.name === 'webkit' || project.name === 'mobile_safari') {
		// There is a bug in webkit where the scroll buttons are not visible 50% of the time
		// Probably due to the scrollWidth or clientWidth not being calculated correctly
		// TODO: Investigate further
		test.skip();
	}

	const scrollRight = page.locator('[data-icon=chevron_right]');
	await expect(scrollRight).toBeVisible();
};

test.describe('DBTabs', () => {
	runAriaSnapshotTest({
		path,
		preScreenShot
	});
});
