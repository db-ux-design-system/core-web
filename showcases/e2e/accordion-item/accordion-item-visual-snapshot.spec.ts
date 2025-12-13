import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/accordion-item';
test.describe('DBAccordionItem', () => {
	getDefaultScreenshotTest({ path });
});
