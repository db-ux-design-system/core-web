import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBPagination', () => {
	runAxeCoreTest({ path: '05/pagination' });
	runAxeCoreTest({ path: '05/pagination', color: lvl3 });
	runAxeCoreTest({ path: '05/pagination', density: 'functional' });
});
