import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest, isStencil } from '../default.ts';

test.describe('DBTabs', () => {
	// TODO: There might be an issue in our implementation of which elements get which roles
	// So we disabled "aria-allowed-role" for now
	getA11yTest({
		path: '04/tabs',
		// We need to change tabs anyway, we disable the rules for now
		axeDisableRules: ['aria-allowed-role'],
		aCheckerDisableRules: ['input_checkboxes_grouped', 'aria_role_valid'],
		// TODO: We skip this for now until mitosis output is correct
		skipChecker: isStencil(process.env.showcase)
	});
});
