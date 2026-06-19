import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const skipAxe = hasWebComponentSyntax(process.env.showcase);
test.describe('DBControlPanelNavigation', () => {
	runAxeCoreTest({ path: '05/control-panel-navigation', skipAxe });
	runAxeCoreTest({
		path: '05/control-panel-navigation',
		color: lvl3,
		skipAxe
	});
	runAxeCoreTest({
		path: '05/control-panel-navigation',
		density: 'functional',
		skipAxe
	});
});
