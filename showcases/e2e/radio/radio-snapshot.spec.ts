import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/radio';
test.describe('DBRadio', () => {
	getDefaultScreenshotTest({
		path
	});
	// TODO: There is an issue with playwright ariaSnapshot not working properly for react
	// runAriaSnapshotTest({ path });
});
