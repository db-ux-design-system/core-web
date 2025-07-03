import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '03/switch';

test.describe('DBSwitch', () => {
	getDefaultScreenshotTest({
		path
	});
	// TODO: There is an issue with playwright ariaSnapshot not working properly for react
	//
});
