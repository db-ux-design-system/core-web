import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

const path = '03/custom-select';

test.describe('DBCustomSelect', () => {
	runA11yCheckerTest({ path });
});
