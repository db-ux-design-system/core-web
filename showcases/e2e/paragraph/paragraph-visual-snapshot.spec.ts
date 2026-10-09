import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/paragraph';
test.describe('Static Paragraph components', () => {
	getDefaultScreenshotTest({ path });
});
