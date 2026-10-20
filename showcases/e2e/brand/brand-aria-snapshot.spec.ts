import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/brand';
test.describe('DBBrand', () => {
	runAriaSnapshotTest({ path });
});
