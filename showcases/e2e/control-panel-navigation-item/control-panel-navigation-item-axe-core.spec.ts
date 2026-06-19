import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const fixedHeight = 1800; // Set fixed height, because of issues with angulars `ngAfterContentInit`
const skipAxe = hasWebComponentSyntax(process.env.showcase);
test.describe('DBControlPanelNavigationItem', () => {
	runAxeCoreTest({
		path: '05/control-panel-navigation-item',
		fixedHeight,
		skipAxe
	});
	runAxeCoreTest({
		path: '05/control-panel-navigation-item',
		color: lvl3,
		fixedHeight,
		skipAxe
	});
	runAxeCoreTest({
		path: '05/control-panel-navigation-item',
		density: 'functional',
		fixedHeight,
		skipAxe
	});
});
