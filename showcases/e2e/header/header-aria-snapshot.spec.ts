import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/header';
test.describe('DBHeader', () => {
	runAriaSnapshotTest({ path });
});
