import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest, hasWebComponentSyntax } from '../default.ts';

test.describe('DBAccordion', () => {
	getA11yTest({
		path: '04/accordion',
		// https://stackoverflow.com/questions/78129019/can-you-have-an-li-in-a-autonomous-custom-element-with-the-parent-ul-not
		// TODO: reevaluate on other solutions than deactivating this
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
});
