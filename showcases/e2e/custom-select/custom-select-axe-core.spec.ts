import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const path = '03/custom-select';

// The color-contrast for the disabled custom-select with tags is a false positive for axe
const axeDisableRules = ['color-contrast'];

test.describe('DBCustomSelect', () => {
	runAxeCoreTest({ path, axeDisableRules });
	runAxeCoreTest({ path, color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path,
		density: 'functional',
		axeDisableRules
	});
});
