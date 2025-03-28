// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { generateSnapshot, getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBSelect', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should open and close select (next())',
		url: './#/03/select?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.press('Tab'); // Focus select
				await nvda?.act(); // Open select
				await nvda?.next(); // Option 1
				await nvda?.next(); // Option 2
			} else if (voiceOver) {
				await voiceOver?.clearSpokenPhraseLog();
				await voiceOver?.next(); // Focus select
				await voiceOver?.act(); // Open select
				await voiceOver?.press('ArrowDown'); // Move to "Option 1"
				await voiceOver?.press('ArrowDown'); // Move to "Option 2"
				await voiceOver?.act(); // Select "Option 2"
			}
		},
		async postTestFn(voiceOver, nvda, retry) {
			if (nvda) {
				await generateSnapshot(nvda, retry);
			} else if (voiceOver) {
				/*
				 * There is a timing issue for macOS for reading menu items length
				 */
				await generateSnapshot(voiceOver, retry, (phraseLog) =>
					phraseLog.map((log) => log.replace('menu 3 items ✓', ''))
				);
			}
		}
	});
});
