import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/shell';
test.describe('DBShell', () => {
	runAriaSnapshotTest({ path });
});
