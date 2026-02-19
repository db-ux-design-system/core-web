import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

const aCheckerDisableRules = ['aria_attribute_valid']; // TODO: This is a false positive -> add an issue in https://github.com/IBMa/equal-access

test.describe('DBCustomButton', () => {
	runA11yCheckerTest({ path: '02/custom-button', aCheckerDisableRules });
});
