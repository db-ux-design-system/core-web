import { test } from '@playwright/test';
import { isStencil, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const aCheckerDisableRules = isStencil(process.env.showcase)
	? ['text_contrast_sufficient', 'aria_attribute_valid']
	: ['aria_attribute_valid']; // TODO: This is a false positive -> add an issue in https://github.com/IBMa/equal-access

test.describe('DBLink', () => {
	runAxeCoreTest({ path: '02/link' });
	runAxeCoreTest({ path: '02/link', color: lvl3 });
	runAxeCoreTest({ path: '02/link', density: 'functional' });
});
