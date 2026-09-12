import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '05/pagination';
test.describe('DBPagination', () => {
	getDefaultScreenshotTest({ path });
});
