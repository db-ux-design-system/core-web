import { test } from '@playwright/test';
import { isStencil, runA11yCheckerTest } from '../default.ts';

const aCheckerDisableRules = ['input_checkboxes_grouped', 'aria_role_valid'];
// TODO: We skip this for now until mitosis output is correct
const skipChecker = isStencil(process.env.showcase);

test.describe('DBTabs', () => {
	runA11yCheckerTest({
		path: '04/tabs',
		aCheckerDisableRules,
		skipChecker
	});
});
