import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

test.describe('DBBreadcrumb', () => {
	runAriaSnapshotTest({ path: '05/breadcrumb' });
});
