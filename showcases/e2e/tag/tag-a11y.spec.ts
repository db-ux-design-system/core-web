import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBTag', () => {
	runAxeCoreTest({ path: '04/tag' });
	runAxeCoreTest({ path: '04/tag', color: lvl3 });
	runAxeCoreTest({ path: '04/tag', density: 'functional' });
	runA11yCheckerTest({ path: '04/tag' });
});
