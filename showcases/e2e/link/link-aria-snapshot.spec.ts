import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '02/link';
test.describe('DBLink', () => {
	runAriaSnapshotTest({ path });
});
