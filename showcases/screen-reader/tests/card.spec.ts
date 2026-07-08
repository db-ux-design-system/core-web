import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBCard', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have texts inline (next())',
		url: './#/01/card?page=density',
		async testFn(screenReader) {
			if (isWin()) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await screenReader.press('Shift+Tab'); // Jump into the website
			}

			await screenReader.clearSpokenPhraseLog();
			await screenReader.previous(); // Card "Functional"
			await screenReader.next(); // Card "(Default) Regular"
		}
	});
});
