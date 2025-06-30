import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/accordion';
test.describe('DBAccordion', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
