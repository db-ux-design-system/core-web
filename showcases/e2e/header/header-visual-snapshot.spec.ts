import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '01/header';
test.describe('DBHeader', () => {
	getDefaultScreenshotTest({ path });
});
