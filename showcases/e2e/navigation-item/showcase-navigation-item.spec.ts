import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBNavigationItem', () => {
	// Set fixed height, because of issues with angulars `ngAfterContentInit`
	const isAngular = process.env.showcase.startsWith('angular');
	getDefaultScreenshotTest({
		path: '05/navigation-item',
		fixedHeight: 1800,
		skipA11y: isAngular
	});
});
