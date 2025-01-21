// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { devices, type PlaywrightTestConfig } from '@playwright/test';
import defaultScreenReaderConfig from './playwright.screen-reader';

const config: PlaywrightTestConfig = {
	...defaultScreenReaderConfig,
	snapshotPathTemplate:
		'{snapshotDir}/{testFileDir}/macos/{projectName}/{arg}{ext}',
	projects: [
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'], headless: false }
		}
	]
};

export default config;
