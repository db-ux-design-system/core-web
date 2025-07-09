import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '03/select';
test.describe('DBSelect', () => {
	runAriaSnapshotTest({ path });
});
