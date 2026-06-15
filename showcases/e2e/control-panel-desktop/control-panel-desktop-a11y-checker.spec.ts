import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBControlPanelDesktop', () => {
	runA11yCheckerTest({ path: '01/control-panel-desktop' });
});
