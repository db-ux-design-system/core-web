import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBNavigationItem', () => {
	// Set fixed height, because of issues with angulars `ngAfterContentInit`
	getDefaultScreenshotTest('05/navigation-item', 1800);
});
