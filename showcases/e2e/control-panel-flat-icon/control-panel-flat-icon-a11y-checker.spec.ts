import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBControlPanelFlatIcon', () => {
	runA11yCheckerTest({ path: '05/control-panel-flat-icon' });
});
