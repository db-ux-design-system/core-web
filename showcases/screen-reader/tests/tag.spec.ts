import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBTag', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should announce inline-texts',
		url: './#/04/tag?&page=density',
		async testFn(screenReader) {
			if (isWin()) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await screenReader.press('Shift+Tab'); // Jump into the website
			}

			await screenReader.clearSpokenPhraseLog();
			await screenReader.previous(); // Focus "tag 1"
			await screenReader.next(); // Focus "tag 2"
			await screenReader.next(); // Focus "tag 3"
		}
	});
	testDefault({
		test,
		title: 'behavior',
		description: 'should announce inline-texts',
		url: './#/04/tag?page=behavior',
		async testFn(screenReader) {
			await screenReader.clearSpokenPhraseLog();
			await (isWin() ? screenReader.previous() : screenReader.next()); // Focus "default static"

			await screenReader.next(); // Focus "removable"
			await screenReader.next(); // Focus "remove button"
			await screenReader.act(); // Interact "remove button"

			await screenReader.next(); // Focus "button"
			await screenReader.next(); // Focus "link"
			await screenReader.next(); // Focus "checkbox"
			await screenReader.act(); // Select "checkbox"
			if (!isWin()) {
				await screenReader.next(); // Focus "checkbox inline-text"
			}

			await screenReader.next(); // Focus "radio 1"
			await screenReader.act(); // Select "radio 1"
			if (!isWin()) {
				await screenReader.next(); // Focus "radio 1 inline-text"
			}
		}
	});
});
