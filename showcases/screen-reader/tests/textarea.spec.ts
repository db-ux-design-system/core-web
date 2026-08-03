import { generateSnapshot, getTest, isWin, testDefault } from '../default';

const test = getTest();
test.describe('DBTextarea', () => {
	testDefault({
		test,
		title: 'next',
		description: 'should have message and label (next())',
		url: './#/03/textarea?page=show+message',
		async testFn(screenReader) {
			if (isWin()) {
				// Nvda doesn't have a next if the element is an input
				test.skip();
			}

			await screenReader.clearSpokenPhraseLog();
			await screenReader.previous(); // Focus "label 1"
			await screenReader.next(); // Focus "textarea 1"
			await screenReader.next(); // Focus "label 2"
			await screenReader.next(); // Focus "textarea 2"
			await screenReader.next(); // Focus "textarea 2 - helper message"
		}
	});
	testDefault({
		test,
		title: 'required',
		description: 'should inform user for changes',
		url: './#/03/textarea?page=required',
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
