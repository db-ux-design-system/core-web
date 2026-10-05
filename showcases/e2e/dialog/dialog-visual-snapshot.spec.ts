import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';
import { openDialog } from './index.ts';

const path = '01/dialog';

test.describe('DBDialog', () => {
	getDefaultScreenshotTest({ path, preScreenShot: openDialog });
});
