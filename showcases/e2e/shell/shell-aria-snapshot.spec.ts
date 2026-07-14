import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/shell';
test.describe('DBShell', () => {
	runAriaSnapshotTest({ path });
});
