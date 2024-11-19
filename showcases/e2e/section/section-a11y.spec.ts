import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBSection', () => {
	runAxeCoreTest({ path: '01/section' });
	runAxeCoreTest({ path: '01/section', color: lvl3 });
	runAxeCoreTest({ path: '01/section', density: 'functional' });
	runA11yCheckerTest({ path: '01/section' });
});
