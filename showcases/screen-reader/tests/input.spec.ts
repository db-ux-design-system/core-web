import { generateSnapshot, getTest, isWin, testDefault } from '../default';

const test = getTest();
test.describe('DBInput', () => {
	testDefault({
		test,
		title: 'next()',
		description: 'should have message and label (next())',
		url: './#/03/input?page=show+message',
		async testFn(screenReader) {
			if (isWin()) {
				// Nvda doesn't have a next if the element is an input
				test.skip();
			}

			// We are on the label after loading
			// Every element (input, label) will be read as single element
			await screenReader.next();
			await screenReader.next();
			await screenReader.next();
			await screenReader.next();
		}
	});
	testDefault({
		test,
		title: 'tab',
		description: 'should have message and label (tab)',
		url: './#/03/input?page=show+message',
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
	testDefault({
		test,
		title: 'required',
		description: 'should inform user for changes',
		url: './#/03/input?page=required',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.press('Tab');
				await screenReader.type('Test');
				await screenReader.press('Control+A');
				await screenReader.press('Delete');
				await screenReader.type('Test');
			} else {
				/* Goto desired input */
				await screenReader.next();
				await screenReader.next();
				await screenReader.clearSpokenPhraseLog();
				await screenReader.next();
				await screenReader.type('Test');
				await screenReader.press('Command+A');
				await screenReader.press('Delete');
				await screenReader.type('Test');
			}
		},
		async postTestFn(screenReader, retry) {
			if (isWin()) {
				await generateSnapshot(screenReader, retry);
			} else {
				/*
				 * There is a timing issue for macOS for typing in input we clean the result
				 */
				await generateSnapshot(screenReader, retry, (phraseLog) =>
					phraseLog.map((log) =>
						log.replace('Test. ', '').replace('t. ', '')
					)
				);
			}
		}
	});
});
