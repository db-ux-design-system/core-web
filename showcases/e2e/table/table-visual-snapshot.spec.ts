import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = 'table';
test.describe('DBTable', () => {
	getDefaultScreenshotTest({ path });
});

