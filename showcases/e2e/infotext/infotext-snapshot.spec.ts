import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/infotext';
test.describe('DBInfotext', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
