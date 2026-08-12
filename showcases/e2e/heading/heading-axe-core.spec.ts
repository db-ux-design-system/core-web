import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// The showcase intentionally demonstrates every semantic level and the
// decoupling of semantics from visual size (e.g. an h6 rendered at 2xl), so the
// document-wide heading order cannot increase by one on this page.
const axeDisableRules = ['heading-order'];

test.describe('DBHeading', () => {
	runAxeCoreTest({ path: '04/heading', axeDisableRules });
	runAxeCoreTest({ path: '04/heading', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '04/heading',
		density: 'functional',
		axeDisableRules
	});
});
