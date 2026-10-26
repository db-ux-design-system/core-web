import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/text-group';
test.describe('Static TextGroup components', () => {
	runAriaSnapshotTest({ path });
});
