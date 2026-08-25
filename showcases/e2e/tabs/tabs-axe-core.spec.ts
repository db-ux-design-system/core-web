import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBTabs', () => {
	runAxeCoreTest({ path: '04/tabs' });
	runAxeCoreTest({ path: '04/tabs', color: lvl3 });
	runAxeCoreTest({
		path: '04/tabs',
		density: 'functional'
	});
});
