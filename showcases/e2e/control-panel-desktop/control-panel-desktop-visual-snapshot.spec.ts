import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '01/control-panel-desktop';
test.describe('DBControlPanelDesktop', () => {
	getDefaultScreenshotTest({ path });
});
