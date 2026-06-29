import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBSelect', () => {
	runAxeCoreTest({ path: '03/select' });
	runAxeCoreTest({ path: '03/select', color: lvl3 });
	runAxeCoreTest({
		path: '03/select',
		density: 'functional'
	});
});
