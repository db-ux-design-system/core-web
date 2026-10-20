import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBBrand', () => {
	runAxeCoreTest({ path: '05/brand' });
	runAxeCoreTest({ path: '05/brand', color: lvl3 });
	runAxeCoreTest({ path: '05/brand', density: 'functional' });
});
