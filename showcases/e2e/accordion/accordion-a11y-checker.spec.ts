import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DBAccordion', () => {
	runA11yCheckerTest({
		path: '04/accordion'
	});
});
