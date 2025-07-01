import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBCheckbox', () => {
	runAxeCoreTest({ path: '03/checkbox' });
	runAxeCoreTest({ path: '03/checkbox', color: lvl3 });
	runAxeCoreTest({ path: '03/checkbox', density: 'functional' });
});
