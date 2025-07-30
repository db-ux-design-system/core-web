import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = 'control-panel-mobile';
test.describe('DBControlPanelMobile', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
