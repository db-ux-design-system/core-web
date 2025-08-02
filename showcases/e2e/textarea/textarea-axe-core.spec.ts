import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBTextarea', () => {
	runAxeCoreTest({ path: '03/textarea' });
	runAxeCoreTest({ path: '03/textarea', color: lvl3 });
	runAxeCoreTest({
		path: '03/textarea',
		density: 'functional'
	});
});
