import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = 'loading-indicator';
test.describe('DBLoadingIndicator', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});

