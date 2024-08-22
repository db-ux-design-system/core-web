import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DBSelect', () => {
	// TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
	getA11yTest({
		path: '03/select',
		axeDisableRules: ['color-contrast']
	});
});
