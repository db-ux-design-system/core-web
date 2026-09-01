import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBTabItem', () => {
	runAxeCoreTest({ path: '04/tab-item' });
	runAxeCoreTest({ path: '04/tab-item', color: lvl3 });
	runAxeCoreTest({
		path: '04/tab-item',
		density: 'functional'
	});
});
