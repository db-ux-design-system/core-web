import { test } from '@playwright/test';
import { isStencil, runA11yCheckerTest } from '../default.ts';

const aCheckerDisableRules = [
	'aria_child_tabbable',
	'input_checkboxes_grouped'
];
// TODO: We skip this for now until mitosis output is correct
const skipChecker = isStencil(process.env.showcase);

test.describe('DBTabItem', () => {
	runA11yCheckerTest({
		path: '04/tab-item',
		aCheckerDisableRules,
		skipChecker
	});
});
