import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { isStencil, runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const path = '03/custom-select';

// TODO: Don't skip for angular when signals are implemented
const skip = { angular: true };

test.describe('DBCustomSelect', () => {
	runAxeCoreTest({ path, skip });
	runAxeCoreTest({ path, color: lvl3, skip });
	runAxeCoreTest({ path, density: 'functional', skip });
	runA11yCheckerTest({ path, skip });
});
