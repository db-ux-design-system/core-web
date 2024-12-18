import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBBadge', () => {
	runAxeCoreTest({ path: '06/badge' });
	runAxeCoreTest({ path: '06/badge', color: lvl3 });
	runAxeCoreTest({ path: '06/badge', density: 'functional' });
	runA11yCheckerTest({ path: '06/badge' });
});
