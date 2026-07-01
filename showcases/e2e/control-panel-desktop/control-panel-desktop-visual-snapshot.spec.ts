import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/control-panel-desktop';
test.describe('DBControlPanelDesktop', () => {
	getDefaultScreenshotTest({ path });
});
