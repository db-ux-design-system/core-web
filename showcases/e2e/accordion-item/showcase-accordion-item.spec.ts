import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBAccordionItem', () => {
	getDefaultScreenshotTest('04/accordion-item');
});
