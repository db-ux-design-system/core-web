// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBTabs', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should select tab and announce corresponding tab panel content',
		url: './#/04/tabs?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				// We want to lose focus for radio buttons otherwise we can't jump to tab panel
				await nvda.perform(
					nvda.keyboardCommands.toggleBetweenBrowseAndFocusMode
				);
				await nvda?.clearSpokenPhraseLog();
				await nvda?.next(); // Focus "tab 2"
				await nvda?.act(); // Select "tab 2"
				await nvda?.next(); // Focus "tab 3"
				await nvda?.next(); // Focus "tab panel 3"
			} else if (voiceOver) {
				await voiceOver?.next();
				await voiceOver?.clearSpokenPhraseLog();
				await voiceOver?.next(); // Focus "tab 1"
				await voiceOver?.next(); // Focus "tab 1 inline-text"
				await voiceOver?.next(); // Focus "tab 2"
				await voiceOver?.act(); // Select "tab 2"
				await voiceOver?.next(); // Focus "tab 2 inline-text"
				await voiceOver?.next(); // Focus "tab 3"
				await voiceOver?.next(); // Focus "tab 3 inline-text"
				await voiceOver?.next(); // Focus "tab panel 3"
				await voiceOver?.next(); // Focus "tab panel 3 inline-text"
			}
		}
	});
});
