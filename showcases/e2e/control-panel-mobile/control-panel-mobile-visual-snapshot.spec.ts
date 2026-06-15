import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '01/control-panel-mobile';
test.describe('DBControlPanelMobile', () => {
	getDefaultScreenshotTest({ path });
});
