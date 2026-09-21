import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBBreadcrumb', () => {
	runAxeCoreTest({ path: 'breadcrumb' });
	runAxeCoreTest({ path: 'breadcrumb', color: lvl3 });
	runAxeCoreTest({ path: 'breadcrumb', density: 'functional' });
});
