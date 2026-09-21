import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = 'breadcrumb';
test.describe('DBBreadcrumb', () => {
	runAriaSnapshotTest({ path });
});
