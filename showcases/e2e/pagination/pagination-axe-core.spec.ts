import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBPagination', () => {
	runAxeCoreTest({ path: 'pagination' });
	runAxeCoreTest({ path: 'pagination', color: lvl3 });
	runAxeCoreTest({ path: 'pagination', density: 'functional' });
});
