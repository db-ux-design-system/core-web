// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBSection', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have ...? (next())',
		url: './#/01/section?page=width',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await nvda.press('Shift+Tab'); // Jump into the website -> Section 2
				await nvda?.clearSpokenPhraseLog();
				await nvda?.previous(); // Section 1
			} else if (voiceOver) {
				await voiceOver?.previous(); // Section 1
			}
		}
	});
});
