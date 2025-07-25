import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '06/badge';
test.describe('DBBadge', () => {
	getDefaultScreenshotTest({ path });
});
