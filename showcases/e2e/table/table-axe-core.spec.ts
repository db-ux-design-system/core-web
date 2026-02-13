import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBTable', () => {
	runAxeCoreTest({ path: 'table' });
	runAxeCoreTest({ path: 'table', color: lvl3 });
	runAxeCoreTest({ path: 'table', density: 'functional' });
});
