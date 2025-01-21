// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBPopover', () => {
	testDefault({
		test,
		title: 'opened',
		description: 'should open the popover',
		url: './#/01/popover?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.act(); // Opening first popover
				await nvda?.press('Tab'); // Tab to button inside popover
				await nvda?.next(); // Navigating to default button
				await nvda?.clearSpokenPhraseLog();
				await nvda?.act(); // Read button + opening second popover -> should jump to article
				await nvda?.next(); // Navigating to first item of list within popover
				await nvda?.next(); // Navigating to section item of list within popover
				await nvda?.next(); // Navigating to button within popover
				await nvda?.next(); // Navigating to next button
			} else if (voiceOver) {
				await voiceOver?.next(); // Opening first popover and navigating to the included "article"
				await voiceOver?.next(); // Navigating to list within popover
				await voiceOver?.next(); // Navigating to first item of list within popover
				await voiceOver?.next(); // Navigating to section item of list within popover
				await voiceOver?.next(); // Navigating to end of list within popover
				await voiceOver?.next(); // Navigating to button within popover
				await voiceOver?.next(); // Navigating to end of article
				await voiceOver?.next(); // Navigating to next button and open next popover
			}
		}
	});
});
