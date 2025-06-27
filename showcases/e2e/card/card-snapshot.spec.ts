import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '01/card';
test.describe('DBCard', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
