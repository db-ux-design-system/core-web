import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/tag';

test.describe('DBTag', () => {
	runAriaSnapshotTest({ path });
});
