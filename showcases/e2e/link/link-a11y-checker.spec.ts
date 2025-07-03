import { test } from '@playwright/test';
import { isStencil, runA11yCheckerTest } from '../default.ts';

const aCheckerDisableRules = isStencil(process.env.showcase)
	? ['text_contrast_sufficient', 'aria_attribute_valid']
	: ['aria_attribute_valid']; // TODO: This is a false positive -> add an issue in https://github.com/IBMa/equal-access

test.describe('DBLink', () => {
	runA11yCheckerTest({ path: '02/link', aCheckerDisableRules });
});
