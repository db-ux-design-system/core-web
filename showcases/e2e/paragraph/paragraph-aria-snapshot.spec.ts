import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/paragraph';
test.describe('Static Paragraph components', () => {
	runAriaSnapshotTest({ path });
});
