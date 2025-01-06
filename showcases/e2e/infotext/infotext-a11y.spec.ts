import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBInfotext', () => {
	runAxeCoreTest({ path: '04/infotext' });
	runAxeCoreTest({ path: '04/infotext', color: lvl3 });
	runAxeCoreTest({ path: '04/infotext', density: 'functional' });
	runA11yCheckerTest({ path: '04/infotext' });
});
