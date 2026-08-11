import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBBrand', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have inline texts, no icons, but the custom logo as image (next())',
		url: './#/04/brand?page=variants',
		async testFn(screenReader) {
			if (isWin()) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await screenReader.press('Shift+Tab'); // Jump into the website
				await screenReader.clearSpokenPhraseLog();
				await screenReader.previous(); // Label 1 + 2
				await screenReader.next(); // Logo image
				await screenReader.next(); // Label 3
			} else {
				await screenReader.previous(); // Label 1
				await screenReader.next(); // Label 2
				await screenReader.next(); // Logo image
				await screenReader.next(); // Label 3
			}
		}
	});
});
