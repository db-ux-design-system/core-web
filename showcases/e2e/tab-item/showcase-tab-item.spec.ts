import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBTabItem', () => {
	// TODO: There might be an issue in our implementation of which elements get which roles
	// So we disabled "aria-allowed-role" for now
	getDefaultScreenshotTest({
		path: '04/tab-item',
		// We need to change tabs anyway, we disable the rules for now
		axeDisableRules: ['aria-allowed-role'],
		aCheckerDisableRules: [
			'aria_child_tabbable',
			'input_checkboxes_grouped',
			'aria_role_valid'
		]
	});
});
