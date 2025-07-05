import { test } from '@playwright/test';
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBCheckbox', () => {
	runAxeCoreTest({ path: '03/checkbox' });
	runAxeCoreTest({ path: '03/checkbox', color: lvl3 });
	runAxeCoreTest({ path: '03/checkbox', density: 'functional' });
	runA11yCheckerTest({ path: '03/checkbox' });
});
