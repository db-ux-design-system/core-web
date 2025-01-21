# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-snapshot.spec.ts` : null %>"
---
import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '<%= name %>';
test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	getDefaultScreenshotTest({ path });
	runAriaSnapshotTest({ path });
});

