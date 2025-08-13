import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBButton', () => {
	runAxeCoreTest({ path: '02/button' });
	runAxeCoreTest({ path: '02/button', color: lvl3 });
	runAxeCoreTest({ path: '02/button', density: 'functional' });
});
