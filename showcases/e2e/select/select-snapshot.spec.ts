import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '03/select';
test.describe('DBSelect', () => {
	getDefaultScreenshotTest({
		path
	});
	runAriaSnapshotTest({ path });
});
