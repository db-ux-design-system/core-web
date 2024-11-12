import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBAccordion', () => {
	runAxeCoreTest({ path: '04/accordion' });
	runAxeCoreTest({ path: '04/accordion', color: lvl3 });
	runAxeCoreTest({ path: '04/accordion', density: 'functional' });
	runA11yCheckerTest({ path: '04/accordion' });
});
