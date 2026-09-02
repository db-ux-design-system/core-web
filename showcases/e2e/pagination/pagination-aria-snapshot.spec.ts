import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = 'pagination';
test.describe('DBPagination', () => {
	runAriaSnapshotTest({ path });
});
