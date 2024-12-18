import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBBrand', () => {
	runAxeCoreTest({ path: '04/brand' });
	runAxeCoreTest({ path: '04/brand', color: lvl3 });
	runAxeCoreTest({ path: '04/brand', density: 'functional' });
	runA11yCheckerTest({ path: '04/brand' });
});
