import { test } from '@playwright/test';
import {
	hasWebComponentSyntax,
	runAxeCoreTest,
	runA11yCheckerTest
	// @ts-expect-error - required for playwright
} from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const fixedHeight = 1800; // Set fixed height, because of issues with angulars `ngAfterContentInit`
const skipAxe = hasWebComponentSyntax(process.env.showcase);
test.describe('DBNavigationItem', () => {
	runAxeCoreTest({ path: '05/navigation-item', fixedHeight, skipAxe });
	runAxeCoreTest({
		path: '05/navigation-item',
		color: lvl3,
		fixedHeight,
		skipAxe
	});
	runAxeCoreTest({
		path: '05/navigation-item',
		density: 'functional',
		fixedHeight,
		skipAxe
	});
	runA11yCheckerTest({ path: '05/navigation-item', fixedHeight });
});
