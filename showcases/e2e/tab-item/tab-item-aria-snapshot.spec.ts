import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/tab-item';
test.describe('DBTabItem', () => {
	runAriaSnapshotTest({ path });
});
