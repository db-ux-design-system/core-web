import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const path = '03/custom-select';

test.describe('DBCustomSelect', () => {
	runAxeCoreTest({ path });
	runAxeCoreTest({ path, color: lvl3 });
	runAxeCoreTest({ path, density: 'functional' });
	runA11yCheckerTest({ path });
});
