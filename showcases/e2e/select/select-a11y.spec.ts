import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBSelect', () => {
	runAxeCoreTest({ path: '03/select' });
	runAxeCoreTest({ path: '03/select', color: lvl3 });
	runAxeCoreTest({
		path: '03/select',
		density: 'functional'
	});
	runA11yCheckerTest({ path: '03/select' });
});
