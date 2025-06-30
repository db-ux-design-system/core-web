import { test } from '@playwright/test';
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBButton', () => {
	runAxeCoreTest({ path: '02/button' });
	runAxeCoreTest({ path: '02/button', color: lvl3 });
	runAxeCoreTest({ path: '02/button', density: 'functional' });
	runA11yCheckerTest({ path: '02/button' });
});
