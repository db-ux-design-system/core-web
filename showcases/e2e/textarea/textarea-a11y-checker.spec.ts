import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

// TODO: disabled element_scrollable_tabbable it's a false-positive: https://github.com/IBMa/equal-access/issues/1911
const aCheckerDisableRules = ['element_scrollable_tabbable'];

test.describe('DBTextarea', () => {
	runA11yCheckerTest({ path: '03/textarea', aCheckerDisableRules });
});
