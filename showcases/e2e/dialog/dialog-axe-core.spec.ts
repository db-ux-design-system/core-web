import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBDialog', () => {
	runAxeCoreTest({ path: '01/dialog' });
	runAxeCoreTest({ path: '01/dialog', color: lvl3 });
	runAxeCoreTest({ path: '01/dialog', density: 'functional' });
});
