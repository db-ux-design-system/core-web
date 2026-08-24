import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/dialog';
test.describe('DBDialog', () => {
	runAriaSnapshotTest({ path });
});
