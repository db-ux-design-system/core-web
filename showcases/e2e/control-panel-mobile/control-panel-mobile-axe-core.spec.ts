import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBControlPanelMobile', () => {
	runAxeCoreTest({ path: '05/control-panel-mobile' });
	runAxeCoreTest({ path: '05/control-panel-mobile', color: lvl3 });
	runAxeCoreTest({ path: '05/control-panel-mobile', density: 'functional' });
});
