import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

const fixedHeight = 1800; // Set fixed height, because of issues with angulars `ngAfterContentInit`

test.describe('DBNavigationItem', () => {
	runA11yCheckerTest({ path: '05/navigation-item', fixedHeight });
});
