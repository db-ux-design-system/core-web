import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/brand';
test.describe('DBBrand', () => {
	runAriaSnapshotTest({ path });
});
