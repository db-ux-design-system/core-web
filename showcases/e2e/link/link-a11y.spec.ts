import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { isStencil, runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const aCheckerDisableRules = isStencil(process.env.showcase)
	? ['text_contrast_sufficient']
	: [];

test.describe('DBLink', () => {
	runAxeCoreTest({ path: '02/link', color: lvl3 });
	runAxeCoreTest({ path: '02/link', density: 'functional' });
	runA11yCheckerTest({ path: '02/link', aCheckerDisableRules });
});
