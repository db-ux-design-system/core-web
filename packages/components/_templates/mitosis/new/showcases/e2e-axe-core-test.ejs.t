---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-axe-core.spec.ts` : null %>"
---
import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	runAxeCoreTest({ path: '<%= name %>' });
	runAxeCoreTest({ path: '<%= name %>', color: lvl3 });
	runAxeCoreTest({ path: '<%= name %>', density: 'functional' });
});
