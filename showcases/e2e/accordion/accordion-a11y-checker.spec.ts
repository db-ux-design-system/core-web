import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

// The "Action" interaction fixture nests a labelled DBTextarea inside a
// collapsed accordion item. DBTextarea associates its <label htmlFor> with the
// <textarea id> correctly (the standalone textarea a11y-checker run passes), but
// the IBM checker reports a false `input_label_exists` violation for a control
// that lives inside a closed <details>, where the hidden subtree is not
// evaluated as associated. Disable just that rule here; the standalone textarea
// spec still enforces it for the visible case.
const aCheckerDisableRules = ['input_label_exists'];

test.describe('DBAccordion', () => {
	runA11yCheckerTest({
		path: '04/accordion',
		aCheckerDisableRules
	});
});
