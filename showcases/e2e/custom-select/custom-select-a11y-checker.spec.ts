import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

const path = '03/custom-select';

test.describe('DBCustomSelect', () => {
	runA11yCheckerTest({
		path,
		aCheckerDisableRules: [
			// Somehow the search input label exists and is connected, while a11y-checker marks as an issue
			'input_label_exists',
			// Somehow the text contrast check fails, for a label inside details if custom-select is disabled
			'text_contrast_sufficient'
		]
	});
});
