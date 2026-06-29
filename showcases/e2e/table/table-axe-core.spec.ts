import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBTable', () => {
	runAxeCoreTest({ path: '04/table' });
	runAxeCoreTest({ path: '04/table', color: lvl3 });
	runAxeCoreTest({ path: '04/table', density: 'functional' });
});
