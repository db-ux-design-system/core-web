import { test } from '@playwright/test';
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBInput', () => {
	runAxeCoreTest({ path: '03/input' });
	runAxeCoreTest({ path: '03/input', color: lvl3 });
	runAxeCoreTest({
		path: '03/input',
		density: 'functional'
	});
	runA11yCheckerTest({
		path: '03/input'
	});
});
