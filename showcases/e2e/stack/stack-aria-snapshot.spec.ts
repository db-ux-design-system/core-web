import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/stack';

test.describe('DBStack', () => {
	runAriaSnapshotTest({ path });
});
