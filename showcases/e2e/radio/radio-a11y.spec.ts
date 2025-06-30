import { test } from '@playwright/test';
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBRadio', () => {
	runAxeCoreTest({ path: '03/radio' });
	runAxeCoreTest({ path: '03/radio', color: lvl3 });
	runAxeCoreTest({ path: '03/radio', density: 'functional' });
	runA11yCheckerTest({ path: '03/radio' });
});
