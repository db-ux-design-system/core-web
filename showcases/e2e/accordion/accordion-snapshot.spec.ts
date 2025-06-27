import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '04/accordion';
test.describe('DBAccordion', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});
