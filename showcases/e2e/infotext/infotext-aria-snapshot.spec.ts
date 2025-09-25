import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/infotext';
test.describe('DBInfotext', () => {
	runAriaSnapshotTest({ path });
});
