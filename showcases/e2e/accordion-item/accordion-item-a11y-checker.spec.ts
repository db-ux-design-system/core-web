import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBAccordionItem', () => {
	runA11yCheckerTest({ path: '04/accordion-item' });
});
