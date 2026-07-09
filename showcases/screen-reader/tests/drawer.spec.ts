import { generateSnapshot, getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBDrawer', () => {
	testDefault({
		test,
		title: 'autofocus',
		description: 'should autofocus',
		url: './#/01/drawer?page=density',
		async testFn(screenReader) {
			await screenReader.previous();
			await screenReader.act();
			await screenReader.next();
		},
		async postTestFn(screenReader, retry) {
			if (isWin()) {
				/*
				 * There is a timing issue for windows which results in different outputs in CICD.
				 * We avoid this by replacing the generated log files
				 */
				await generateSnapshot(screenReader, retry, (phraseLog) =>
					phraseLog.map((log) =>
						log
							.replace('Showcase, document. unknown', 'button')
							.replace('unknown', 'button')
							// Autofocus timing: NVDA sometimes prepends "button." to the dialog announcement
							.replace(
								'button. dialog. document',
								'dialog. document'
							)
					)
				);
			} else {
				await generateSnapshot(screenReader, retry);
			}
		}
	});
});
