import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '03/multi-select';

// TODO: Don't skip for angular when signals are implemented
const skip = { angular: true };
test.describe('DBMultiSelect', () => {
	getDefaultScreenshotTest({ path, skip });
	runAriaSnapshotTest({ path, skip });
});
