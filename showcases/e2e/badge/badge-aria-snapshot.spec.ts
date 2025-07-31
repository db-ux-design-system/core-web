import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '06/badge';
test.describe('DBBadge', () => {
	runAriaSnapshotTest({ path });
});
