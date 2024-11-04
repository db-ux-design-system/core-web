import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest, hasWebComponentSyntax, isStencil } from '../default.ts';

test.describe('DBHeader', () => {
	getA11yTest({
		path: '01/header',
		skipAxe: hasWebComponentSyntax(process.env.showcase),
		// TODO: We skip this for now until mitosis output is correct
		skipChecker: hasWebComponentSyntax(process.env.showcase)
	});
});
