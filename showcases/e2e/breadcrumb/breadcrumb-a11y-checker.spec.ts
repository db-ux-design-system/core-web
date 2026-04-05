import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBBreadcrumb', () => {
	runA11yCheckerTest({ path: '05/breadcrumb' });
});
