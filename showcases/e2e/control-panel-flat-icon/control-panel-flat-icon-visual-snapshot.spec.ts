import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/control-panel-flat-icon';
test.describe('DBControlPanelFlatIcon', () => {
	getDefaultScreenshotTest({ path });
});
