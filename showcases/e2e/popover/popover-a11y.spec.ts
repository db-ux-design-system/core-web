import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-popover';

test.describe('DBPopover', () => {
	getA11yTest({
		path: '01/popover',
		preAxe: async (page) => hoverPre(page, selector)
	});
});
