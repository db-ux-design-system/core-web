import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBControlPanelFlatIcon', () => {
	runAxeCoreTest({ path: '05/control-panel-flat-icon' });
	runAxeCoreTest({ path: '05/control-panel-flat-icon', color: lvl3 });
	runAxeCoreTest({
		path: '05/control-panel-flat-icon',
		density: 'functional'
	});
});
