import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/heading';
test.describe('Static Heading components', () => {
	runAriaSnapshotTest({ path });
});
