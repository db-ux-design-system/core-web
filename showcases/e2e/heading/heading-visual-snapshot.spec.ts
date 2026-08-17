import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '04/heading';
test.describe('Static Heading components', () => {
	getDefaultScreenshotTest({
		path,
		// Baselines are shared but generated from react-showcase only, so a
		// cross-framework difference fails permanently: around the examples' inline
		// `style` attributes Vue and Angular keep a trailing space that JSX trims,
		// shifting the permalink anchor by 6.72px. Same approach as popover, tabs
		// and tab-item. The value is the webkit tolerance that setting `ratio`
		// would otherwise disable.
		ratio: '0.0123'
	});
});
