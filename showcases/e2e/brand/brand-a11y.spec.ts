import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DBBrand', () => {
	getA11yTest({ path: '04/brand' });
});
