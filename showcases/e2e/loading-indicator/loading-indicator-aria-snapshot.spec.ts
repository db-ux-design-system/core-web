import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '06/loading-indicator';
test.describe('DBLoadingIndicator', () => {
	runAriaSnapshotTest({ path });
});
