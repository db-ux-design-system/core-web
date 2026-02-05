import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '06/loading-indicator';
test.describe('DBLoadingIndicator', () => {
	getDefaultScreenshotTest({ path });
});
