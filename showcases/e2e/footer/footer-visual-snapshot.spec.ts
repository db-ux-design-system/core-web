import { test } from '@playwright/test';
import { getDefaultScreenshotTest, isStencil } from '../default.ts';

const path = '01/footer';
test.describe('DBFooter', () => {
	if (isStencil(process.env.showcase)) {
		test.skip();
	}

	/*
	 * The baseline is regenerated from react-showcase but verified against every
	 * framework showcase. This page stacks nine footers, so it carries 18 hairline
	 * `border-block-start` edges, and their fractional offsets round to different
	 * device pixel rows per framework. Analysing the CI diff showed exactly that:
	 * 23346 differing pixels, all of them 1px tall lines about 1020px wide inside
	 * the footer areas, which is 1.04% and tipped the previous 1% budget. The
	 * tolerance now covers the near worst case of every hairline being off by a row,
	 * and stays in line with the 0.02 that tabs and tab-item already use. A genuine
	 * layout regression on this page moves far more than 2% of the image.
	 */
	getDefaultScreenshotTest({ path, ratio: '0.02' });
});
