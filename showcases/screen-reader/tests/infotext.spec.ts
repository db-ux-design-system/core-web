import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBInfotext', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should not mention icon (next())',
		url: './#/04/infotext?page=density',
		async testFn(screenReader) {
			if (isWin()) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await screenReader.press('Shift+Tab'); // Jump into the website -> infotext "Functional"
				await screenReader.clearSpokenPhraseLog();
				await screenReader.next(); // Reading all infotext together
			} else {
				await screenReader.previous(); // Infotext "Functional"
				await screenReader.next(); // Infotext "(Default) Regular"
			}
		}
	});
});
