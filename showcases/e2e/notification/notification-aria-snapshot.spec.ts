import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '06/notification';
test.describe('DBNotification', () => {
	runAriaSnapshotTest({ path });
});
