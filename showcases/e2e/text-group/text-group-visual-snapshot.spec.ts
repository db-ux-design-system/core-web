import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/text-group';
test.describe('Static TextGroup components', () => {
	getDefaultScreenshotTest({ path });
});
