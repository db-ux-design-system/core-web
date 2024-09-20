import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest, hasWebComponentSyntax } from '../default.ts';

test.describe('DBHeader', () => {
	getA11yTest({
		path: '01/header',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
});
