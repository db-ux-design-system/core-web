import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBInput', () => {
	// TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
	getDefaultScreenshotTest({
		path: '03/input',
		axeDisableRules: ['color-contrast'],
		aCheckerDisableRules: ['label_ref_valid'] // TODO: There is an issue with datetime-local - https://github.com/IBMa/equal-access/issues/1910
	});
});
