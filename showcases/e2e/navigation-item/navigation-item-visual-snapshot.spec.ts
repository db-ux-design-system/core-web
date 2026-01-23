import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/navigation-item';
const fixedHeight = 1800;

test.describe('DBNavigationItem', () => {
	// Set fixed height, because of issues with angulars `ngAfterContentInit`
	getDefaultScreenshotTest({
		path,
		fixedHeight,
		skip: { stencil: true }
	});
});
