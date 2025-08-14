import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBBrand', () => {
	runAxeCoreTest({ path: '04/brand' });
	runAxeCoreTest({ path: '04/brand', color: lvl3 });
	runAxeCoreTest({ path: '04/brand', density: 'functional' });
});
