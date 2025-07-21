import { test } from '@playwright/test';
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBDivider', () => {
	runAxeCoreTest({ path: '01/divider' });
	runAxeCoreTest({ path: '01/divider', color: lvl3 });
	runAxeCoreTest({ path: '01/divider', density: 'functional' });
	runA11yCheckerTest({ path: '01/divider' });
});
