import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DBControlPanelMobile', () => {
	getA11yTest({ path: 'control-panel-mobile' });
});
