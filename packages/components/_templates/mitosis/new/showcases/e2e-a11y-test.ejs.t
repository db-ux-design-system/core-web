# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-a11y.spec.ts` : null %>"
---
import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	getA11yTest({ path: '<%= name %>' });
});

