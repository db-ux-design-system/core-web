import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/divider';
const fixedHeight = 1500;
test.describe('DBDivider', () => {
	runAriaSnapshotTest({ path, fixedHeight });
});
