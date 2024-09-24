import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DBAccordionItem', () => {
	// Showcase uses <li> outside of <ul> in this case
	getA11yTest({ path: '04/accordion-item', axeDisableRules: ['listitem'] });
});
