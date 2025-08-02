import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '03/input';
test.describe('DBInput', () => {
	runAriaSnapshotTest({ path });
});
