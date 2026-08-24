import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBDialog', () => {
	runAxeCoreTest({ path: 'dialog' });
	runAxeCoreTest({ path: 'dialog', color: lvl3 });
	runAxeCoreTest({ path: 'dialog', density: 'functional' });
});
