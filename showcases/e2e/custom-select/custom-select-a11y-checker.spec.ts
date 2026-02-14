import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

const path = '03/custom-select';

test.describe('DBCustomSelect', () => {
	runA11yCheckerTest({
		path,
		// Somehow the search input label exists and is connected, while a11y-checker marks as an issue
		aCheckerDisableRules: ['input_label_exists']
	});
});
