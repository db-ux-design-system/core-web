import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

// `aria_attribute_valid` is a known false positive of the IBM equal-access
// checker for the breadcrumb markup.
// TODO: This is a false positive -> add an issue in https://github.com/IBMa/equal-access
const aCheckerDisableRules = ['aria_attribute_valid'];

test.describe('DBBreadcrumb', () => {
	runA11yCheckerTest({
		path: '05/breadcrumb',
		aCheckerDisableRules
	});
});
