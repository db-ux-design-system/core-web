import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBControlPanelMobile', () => {
	runA11yCheckerTest({ path: '05/control-panel-mobile' });
});
