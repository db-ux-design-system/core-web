import { generateSnapshot, getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBSelect', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should open and close select (next())',
		url: './#/03/select?page=density',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.press('Tab'); // Focus select
				await screenReader.act(); // Open select
				await screenReader.next(); // Option 1
				await screenReader.next(); // Option 2
			} else {
				await screenReader.clearSpokenPhraseLog();
				await screenReader.next(); // Focus select
				await screenReader.act(); // Open select
				await screenReader.press('ArrowDown'); // Move to "Option 1"
				await screenReader.press('ArrowDown'); // Move to "Option 2"
				await screenReader.act(); // Select "Option 2"
			}
		},
		async postTestFn(screenReader, retry) {
			if (isWin()) {
				await generateSnapshot(screenReader, retry);
			} else {
				/*
				 * There is a timing issue for macOS for reading menu items length
				 */
				await generateSnapshot(screenReader, retry, (phraseLog) =>
					phraseLog.map((log) => log.replace('menu 3 items ✓', ''))
				);
			}
		}
	});
});
