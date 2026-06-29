import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '02/custom-button';
test.describe('DBCustomButton', () => {
	runAriaSnapshotTest({ path });
});
