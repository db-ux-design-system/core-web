---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-aria-snapshot.spec.ts` : null %>"
---
import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '<%= name %>';
test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	runAriaSnapshotTest({ path });
});

