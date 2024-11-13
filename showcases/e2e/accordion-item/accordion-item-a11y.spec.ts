import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import {
	runA11yCheckerTest,
	runAxeCoreTest,
	runAxeCoreTests
} from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBAccordionItem', () => {
	runAxeCoreTest({ path: '04/accordion-item' });
	runAxeCoreTest({ path: '04/accordion-item', color: lvl3 });
	runAxeCoreTest({ path: '04/accordion-item', density: 'functional' });
	runA11yCheckerTest({ path: '04/accordion-item' });
});
