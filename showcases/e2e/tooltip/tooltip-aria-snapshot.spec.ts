import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';

const selector = '.db-tooltip';
const path = '04/tooltip';

test.describe('DBTooltip', () => {
	runAriaSnapshotTest({
		path,
		preScreenShot: async (page) => hoverPre(page, selector)
	});
});
