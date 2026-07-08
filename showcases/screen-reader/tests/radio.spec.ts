import { getTest, isWin, testDefault } from '../default';

const test = getTest();
test.describe('DBRadio', () => {
	testDefault({
		test,
		title: 'next()',
		description: 'should label duplicated (next())',
		url: './#/03/radio?page=density',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.next();
				await screenReader.clearSpokenPhraseLog();
				await screenReader.previous();
				await screenReader.next();
				await screenReader.next();
			} else {
				// We are on the radio group after loading
				// Every element (radio, label) will be read as single element
				await screenReader.next();
				await screenReader.next();
				await screenReader.next();
				await screenReader.next();
				await screenReader.next();
				await screenReader.next();
			}
		}
	});
	testDefault({
		test,
		title: 'arrows',
		description: 'should label duplicated (arrows)',
		url: './#/03/radio?page=density',
		async testFn(screenReader) {
			if (!isWin()) {
				// Voiceover isn't working with tab in pipeline
				test.skip();
			}

			await screenReader.press('Left');
			await screenReader.clearSpokenPhraseLog();
			await screenReader.press('Left');
			await screenReader.press('Right');
			await screenReader.press('Right');
		}
	});
});
