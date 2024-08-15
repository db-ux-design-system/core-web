---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-snapshot.spec.ts` : null %>"
---
import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	getDefaultScreenshotTest({ path: '<%= name %>' });
});

