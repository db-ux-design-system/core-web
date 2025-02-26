// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';

const showcaseSnapshotConfig: PlaywrightTestConfig = {
	...config,
	testMatch: '*-snapshot.spec.ts'
};

export default showcaseSnapshotConfig;
