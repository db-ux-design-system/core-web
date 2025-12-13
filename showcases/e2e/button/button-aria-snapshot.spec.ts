import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '02/button';
test.describe('DBButton', () => {
	runAriaSnapshotTest({ path });
});
