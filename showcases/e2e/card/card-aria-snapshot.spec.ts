import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/card';
test.describe('DBCard', () => {
	runAriaSnapshotTest({ path });
});
