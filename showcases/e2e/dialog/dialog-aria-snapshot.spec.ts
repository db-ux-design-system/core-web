import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = 'dialog';
test.describe('DBDialog', () => {
	runAriaSnapshotTest({ path });
});
