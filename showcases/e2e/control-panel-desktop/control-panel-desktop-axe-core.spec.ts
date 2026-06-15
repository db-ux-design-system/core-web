import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBControlPanelDesktop', () => {
	runAxeCoreTest({ path: '01/control-panel-desktop' });
	runAxeCoreTest({ path: '01/control-panel-desktop', color: lvl3 });
	runAxeCoreTest({
		path: '01/control-panel-desktop',
		density: 'functional'
	});
});
