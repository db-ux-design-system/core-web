import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBSwitch', () => {
	runAxeCoreTest({ path: '03/switch' });
	runAxeCoreTest({ path: '03/switch', color: lvl3 });
	runAxeCoreTest({ path: '03/switch', density: 'functional' });
	runA11yCheckerTest({
		path: '03/switch',
		// It's an issue in the tool: https://github.com/IBMa/equal-access/issues/842
		aCheckerDisableRules: ['aria_attribute_valid']
	});
});
