import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBBreadcrumb', () => {
	runAxeCoreTest({ path: '05/breadcrumb' });
	runAxeCoreTest({ path: '05/breadcrumb', color: lvl3 });
	runAxeCoreTest({ path: '05/breadcrumb', density: 'functional' });
});
