---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-snapshot.spec.ts` : null %>"
---
import { test } from '@playwright/test';
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '<%= name %>';
test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});

