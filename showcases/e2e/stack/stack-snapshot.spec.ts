import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBStack', () => {
	getDefaultScreenshotTest({ path: '01/stack' });
});
