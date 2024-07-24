import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBLink', () => {
	getDefaultScreenshotTest({
		path: '02/link',
		aCheckerDisableRules: ['aria_attribute_valid'] // TODO: This is a false positive -> add an issue in https://github.com/IBMa/equal-access
	});
});
