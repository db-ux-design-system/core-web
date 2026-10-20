import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/shell/shell';
test.describe('DBShell', () => {
	runAriaSnapshotTest({ path });
});
