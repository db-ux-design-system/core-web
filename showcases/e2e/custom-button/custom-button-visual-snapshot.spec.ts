import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '02/custom-button';
test.describe('DBCustomButton', () => {
	getDefaultScreenshotTest({ path });
});
