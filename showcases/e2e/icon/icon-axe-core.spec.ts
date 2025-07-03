import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBIcon', () => {
	runAxeCoreTest({ path: '04/icon' });
	runAxeCoreTest({ path: '04/icon', color: lvl3 });
	runAxeCoreTest({ path: '04/icon', density: 'functional' });
});
