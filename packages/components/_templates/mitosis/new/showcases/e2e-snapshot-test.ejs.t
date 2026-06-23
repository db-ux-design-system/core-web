---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-visual-snapshot.spec.ts` : null %>"
---
import { test } from '@playwright/test';
import { getDefaultScreenshotTest } from '../default.ts';

const path = '<%= name %>';
test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	getDefaultScreenshotTest({ path });
});

