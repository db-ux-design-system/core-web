// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBBrand', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have inline texts, no icons, but the custom logo as image (next())',
		url: './#/04/brand?page=variants',
		async testFn(voiceOver, nvda) {
			if (voiceOver) {
				await voiceOver?.previous(); // Label 1
				await voiceOver?.next(); // Label 2
				await voiceOver?.next(); // Logo image
				await voiceOver?.next(); // Label 3
			} else if (nvda) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await nvda.press('Shift+Tab'); // Jump into the website
				await nvda?.clearSpokenPhraseLog();
				await nvda?.previous(); // Label 1 + 2
				await nvda?.next(); // Logo image
				await nvda?.next(); // Label 3
			}
		}
	});
});
