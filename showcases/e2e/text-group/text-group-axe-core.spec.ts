import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// The "With Components" example puts a heading inside a group to show that the
// gap spaces any child type. It follows the showcase container's own heading, so
// the document-wide heading order cannot increase by one on this page.
const axeDisableRules = ['heading-order'];

test.describe('Static TextGroup components', () => {
	runAxeCoreTest({ path: '04/text-group', axeDisableRules });
	runAxeCoreTest({ path: '04/text-group', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '04/text-group',
		density: 'functional',
		axeDisableRules
	});
});
