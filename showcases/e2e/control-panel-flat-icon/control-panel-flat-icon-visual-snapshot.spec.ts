import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/shell/control-panel-flat-icon';
test.describe('DBControlPanelFlatIcon', () => {
	getDefaultScreenshotTest({ path });
});
