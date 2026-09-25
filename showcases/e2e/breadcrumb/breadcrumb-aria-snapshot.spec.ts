import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/breadcrumb';
test.describe('DBBreadcrumb', () => {
	runAriaSnapshotTest({ path });
});
