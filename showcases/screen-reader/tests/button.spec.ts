import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBButton', () => {
	testDefault({
		test,
		title: 'next()',
		description: 'should not have icon in screen reader (next())',
		url: './#/02/button?page=show+icon+leading',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.next();
			}

			await screenReader.clearSpokenPhraseLog();
			await screenReader.previous();
			await screenReader.next();
		}
	});
	testDefault({
		test,
		title: 'tab',
		description: 'should not have icon in screen reader (tab)',
		url: './#/02/button?page=show+icon+leading',
		async testFn(screenReader) {
			if (!isWin()) {
				// Voiceover isn't working with tab in pipeline
				test.skip();
			}

			await screenReader.press('Tab');
			await screenReader.clearSpokenPhraseLog();
			await screenReader.press('Shift+Tab');
			await screenReader.press('Tab');
		}
	});
});
