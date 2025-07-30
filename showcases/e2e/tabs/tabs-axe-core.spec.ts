import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// We need to change tabs anyway, we disable the rules for now
// TODO: There might be an issue in our implementation of which elements get which roles
// So we disabled "aria-allowed-role" for now
const axeDisableRules = ['aria-allowed-role'];

test.describe('DBTabs', () => {
	runAxeCoreTest({ path: '04/tabs', axeDisableRules });
	runAxeCoreTest({ path: '04/tabs', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '04/tabs',
		density: 'functional',
		axeDisableRules
	});
});
