import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBControlPanelBrand', () => {
	runAxeCoreTest({ path: '05/control-panel-brand' });
	runAxeCoreTest({ path: '05/control-panel-brand', color: lvl3 });
	runAxeCoreTest({ path: '05/control-panel-brand', density: 'functional' });
});
