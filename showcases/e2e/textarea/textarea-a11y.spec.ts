import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules = ['color-contrast']; // TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
// TODO: disabled element_scrollable_tabbable it's a false-positive: https://github.com/IBMa/equal-access/issues/1911
const aCheckerDisableRules = ['element_scrollable_tabbable'];

test.describe('DBTextarea', () => {
	runAxeCoreTest({ path: '03/textarea', axeDisableRules });
	runAxeCoreTest({ path: '03/textarea', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '03/textarea',
		density: 'functional',
		axeDisableRules
	});
	runA11yCheckerTest({ path: '03/textarea', aCheckerDisableRules });
});
