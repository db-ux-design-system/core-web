import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '03/switch';

test.describe('DBSwitch', () => {
	runAriaSnapshotTest({ path });
});
