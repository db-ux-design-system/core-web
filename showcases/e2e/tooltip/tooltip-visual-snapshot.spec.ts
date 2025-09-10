import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-tooltip';
const path = '04/tooltip';

test.describe('DBTooltip', () => {
	getDefaultScreenshotTest({
		path,
		preScreenShot: async (page) => hoverPre(page, selector)
	});
});
