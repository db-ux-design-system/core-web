import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DBSwitch', () => {
	getA11yTest({
		path: '03/switch',
		// It's an issue in the tool: https://github.com/IBMa/equal-access/issues/842
		aCheckerDisableRules: ['aria_attribute_valid']
	});
});
