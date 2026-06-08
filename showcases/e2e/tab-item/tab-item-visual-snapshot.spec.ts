import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/tab-item';
test.describe('DBTabItem', () => {
	getDefaultScreenshotTest({
		path,
		// Increased tolerance due to subpixel rendering differences of icon fonts
		// and the bold-weight reservation pseudo-element across browsers/platforms.
		// Revisit whether this can be tightened to default once rendering stabilizes.
		ratio: '0.02'
	});
});
