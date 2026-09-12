import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/pagination';
test.describe('DBPagination', () => {
	runAriaSnapshotTest({ path });
});
