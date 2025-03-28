// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBCard', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have texts inline (next())',
		url: './#/01/card?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await nvda.press('Shift+Tab'); // Jump into the website
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Card "Functional"
			await screenReader?.next(); // Card "(Default) Regular"
		}
	});
});
