import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = 'pagination';
test.describe('DBPagination', () => {
	getDefaultScreenshotTest({ path });
});
