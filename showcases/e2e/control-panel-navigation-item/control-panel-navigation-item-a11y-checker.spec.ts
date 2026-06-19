import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

const fixedHeight = 1800; // Set fixed height, because of issues with angulars `ngAfterContentInit`

test.describe('DBControlPanelNavigationItem', () => {
	runA11yCheckerTest({
		path: '05/control-panel-navigation-item',
		fixedHeight
	});
});
