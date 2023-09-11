import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBAccordion', () => {
	getDefaultScreenshotTest('04/accordion');
});
