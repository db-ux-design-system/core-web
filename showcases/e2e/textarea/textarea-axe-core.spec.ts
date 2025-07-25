import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// TODO: disabled element_scrollable_tabbable it's a false-positive: https://github.com/IBMa/equal-access/issues/1911
const aCheckerDisableRules = ['element_scrollable_tabbable'];

test.describe('DBTextarea', () => {
	runAxeCoreTest({ path: '03/textarea' });
	runAxeCoreTest({ path: '03/textarea', color: lvl3 });
	runAxeCoreTest({
		path: '03/textarea',
		density: 'functional'
	});
});
