import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-tooltip';

test.describe('DBTooltip', () => {
	getA11yTest({
		path: '04/tooltip',
		preA11y: async (page) => hoverPre(page, selector)
	});
});
