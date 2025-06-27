import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '06/badge';
test.describe('DBBadge', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
