import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/heading';
test.describe('Static Heading components', () => {
	getDefaultScreenshotTest({ path });
});
