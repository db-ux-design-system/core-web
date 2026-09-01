import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/table';
test.describe('DBTable', () => {
	runAriaSnapshotTest({ path });
});
