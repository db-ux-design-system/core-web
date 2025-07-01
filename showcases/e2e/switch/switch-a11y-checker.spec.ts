import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBSwitch', () => {
	runA11yCheckerTest({
		path: '03/switch',
		// It's an issue in the tool: https://github.com/IBMa/equal-access/issues/842
		aCheckerDisableRules: ['aria_attribute_valid']
	});
});
