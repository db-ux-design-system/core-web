import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = 'table';
test.describe('DBTable', () => {
	runAriaSnapshotTest({ path });
});

