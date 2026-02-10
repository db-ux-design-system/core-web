---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-a11y-checker.spec.ts` : null %>"
---
import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	runA11yCheckerTest({ path: '<%= name %>' });
});

