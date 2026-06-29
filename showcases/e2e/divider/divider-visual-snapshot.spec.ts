import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '01/divider';
const fixedHeight = 1500;
test.describe('DBDivider', () => {
	getDefaultScreenshotTest({ path, fixedHeight });
});
