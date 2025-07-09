import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/drawer';
test.describe('DBDrawer', () => {
	runAriaSnapshotTest({ path });
});
