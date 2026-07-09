import { generateSnapshot, getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBSwitch', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should toggle switches, should not toggle disabled switch',
		url: './#/03/switch?page=checked',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.previous(); // Focus "switch 1"
				await screenReader.act(); // Interact "switch 1"
				await screenReader.next(); // Focus "switch 2"
				await screenReader.act(); // Interact "switch 2"
				await screenReader.next(); // Focus "switch 3"
			} else {
				await screenReader.previous(); // Focus "switch 1"
				await screenReader.act(); // Interact "switch 1"
				await screenReader.next(); // Focus "switch 1 inline text"
				await screenReader.next(); // Focus "switch 2"
				await screenReader.act(); // Interact "switch 1"
				await screenReader.next(); // Focus "switch 2 inline text"
				await screenReader.next(); // Focus "switch 3"
				await screenReader.act(); // Interact "switch 1"
				await screenReader.next(); // Focus "switch 3 inline text"
			}
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
							// NVDA sometimes shows "blank"
							.replace('blank', 'switch, off, True')
					)
				);
			} else {
				await generateSnapshot(screenReader, retry);
			}
		}
	});
	testDefault({
		test,
		title: 'icon',
		description: 'should not announce icons',
		url: './#/03/switch?page=visual+aid',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.previous(); // Focus "switch 1"
				await screenReader.next(); // Focus "switch 2"
				await screenReader.act(); // Interact "switch 2"
			} else {
				await screenReader.previous(); // Focus "switch 1"
				await screenReader.next(); // Focus "switch 1 inline text"
				await screenReader.next(); // Focus "switch 2"
				await screenReader.act(); // Interact "switch 2"
				await screenReader.next(); // Focus "switch 2"
			}
		}
	});
});
