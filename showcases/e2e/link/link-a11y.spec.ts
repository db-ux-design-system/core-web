import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { isStencil, runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules = isStencil(process.env.showcase)
	? ['color-contrast']
	: [];

const aCheckerDisableRules = isStencil(process.env.showcase)
	? ['text_contrast_sufficient', 'aria_attribute_valid']
	: ['aria_attribute_valid']; // TODO: This is a false positive -> add an issue in https://github.com/IBMa/equal-access

test.describe('DBLink', () => {
	runAxeCoreTest({ path: '02/link', axeDisableRules });
	runAxeCoreTest({ path: '02/link', color: lvl3, axeDisableRules });
	runAxeCoreTest({ path: '02/link', density: 'functional', axeDisableRules });
	runA11yCheckerTest({ path: '02/link', aCheckerDisableRules });
});
