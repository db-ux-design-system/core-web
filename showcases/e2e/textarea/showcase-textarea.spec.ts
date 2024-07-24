import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBTextarea', () => {
	// TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
	getDefaultScreenshotTest({
		path: '03/textarea',
		axeDisableRules: ['color-contrast'],
		// TODO: disabled element_scrollable_tabbable it's a false-positive: https://github.com/IBMa/equal-access/issues/1911
		aCheckerDisableRules: ['element_scrollable_tabbable']
	});
});
