import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/infotext';
test.describe('DBInfotext', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
