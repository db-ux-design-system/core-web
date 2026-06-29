import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/accordion';
test.describe('DBAccordion', () => {
	runAriaSnapshotTest({ path });
});
