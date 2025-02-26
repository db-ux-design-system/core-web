// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBTag', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should announce inline-texts',
		url: './#/04/tag?&page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await nvda.press('Shift+Tab'); // Jump into the website
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Focus "tag 1"
			await screenReader?.next(); // Focus "tag 2"
			await screenReader?.next(); // Focus "tag 3"
		}
	});
	testDefault({
		test,
		title: 'behavior',
		description: 'should announce inline-texts',
		url: './#/04/tag?page=behavior',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await (voiceOver ? screenReader?.next() : screenReader?.previous()); // Focus "default static"

			await screenReader?.next(); // Focus "removable"
			await screenReader?.next(); // Focus "remove button"
			await screenReader?.act(); // Interact "remove button"

			await screenReader?.next(); // Focus "button"
			await screenReader?.next(); // Focus "link"
			await screenReader?.next(); // Focus "checkbox"
			await screenReader?.act(); // Select "checkbox"
			if (voiceOver) {
				await screenReader?.next(); // Focus "checkbox inline-text"
			}

			await screenReader?.next(); // Focus "radio 1"
			await screenReader?.act(); // Select "radio 1"
			if (voiceOver) {
				await screenReader?.next(); // Focus "radio 1 inline-text"
			}
		}
	});
});
