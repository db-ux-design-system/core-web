import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBIcon', () => {
	runAxeCoreTest({ path: '04/icon' });
	runAxeCoreTest({ path: '04/icon', color: lvl3 });
	runAxeCoreTest({ path: '04/icon', density: 'functional' });
	runA11yCheckerTest({ path: '04/icon' });
});
