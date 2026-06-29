import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// Showcase uses <li> outside of <ul> in this case
// TODO: Let's investigate whether we could prevent this deactivation later on
const axeDisableRules = ['listitem'];

test.describe('DBAccordionItem', () => {
	runAxeCoreTest({ path: '04/accordion-item', axeDisableRules });
	runAxeCoreTest({ path: '04/accordion-item', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '04/accordion-item',
		density: 'functional',
		axeDisableRules
	});
});
