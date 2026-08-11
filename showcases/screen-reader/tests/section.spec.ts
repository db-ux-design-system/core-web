import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBSection', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have ...? (next())',
		url: './#/01/section?page=width',
		async testFn(screenReader) {
			if (isWin()) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await screenReader.press('Shift+Tab'); // Jump into the website -> Section 2
				await screenReader.clearSpokenPhraseLog();
				await screenReader.previous(); // Section 1
			} else {
				await screenReader.previous(); // Section 1
			}
		}
	});
});
