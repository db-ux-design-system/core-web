// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { screenReaderConfig } from '@guidepup/playwright';
import { devices, type PlaywrightTestConfig } from '@playwright/test';
import showcaseConfig from './playwright.showcase';

const defaultScreenReaderConfig: PlaywrightTestConfig = {
	...screenReaderConfig,
	...showcaseConfig,
	retries: process.env.CI ? 2 : 0,
	reportSlowTests: null,
	testDir: './screen-reader/tests',
	snapshotDir: './screen-reader/__snapshots__',
	timeout: 3 * 60 * 1000
};

export default defaultScreenReaderConfig;
