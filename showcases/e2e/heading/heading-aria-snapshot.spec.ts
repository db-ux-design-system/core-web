import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = 'heading';
test.describe('DBHeading', () => {
	runAriaSnapshotTest({ path });
});
