import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/section';
test.describe('DBSection', () => {
	runAriaSnapshotTest({ path });
});
