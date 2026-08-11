import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = 'heading';
test.describe('DBHeading', () => {
	getDefaultScreenshotTest({ path });
});
