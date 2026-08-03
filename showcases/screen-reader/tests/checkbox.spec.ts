import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBCheckbox', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should tick and untick checkbox, feedback messages must appear',
		url: './#/03/checkbox?page=required',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.next(); // Focus checkbox 2
				await screenReader.act(); // Tick checkbox 2
				await screenReader.act(); // Tick checkbox 2
				await screenReader.next(); // Focus checkbox 2 label
				await screenReader.next(); // Focus checkbox 2 message
			} else {
				await screenReader.next(); // Focus checkbox 1
				await screenReader.next(); // Focus checkbox 1 label
				await screenReader.clearSpokenPhraseLog();

				await screenReader.next(); // Focus checkbox 2
				await screenReader.act(); // Tick checkbox 2
				await screenReader.act(); // Tick checkbox 2
				await screenReader.next(); // Focus checkbox 2 label
				await screenReader.next(); // Focus checkbox 2 message
			}
		}
	});
});
