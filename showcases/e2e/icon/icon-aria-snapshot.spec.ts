import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/icon';
test.describe('DBIcon', () => {
	runAriaSnapshotTest({ path });
});
