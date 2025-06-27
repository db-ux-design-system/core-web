import { generateSnapshot, getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBTextarea', () => {
	testDefault({
		test,
		title: 'next',
		description: 'should have message and label (next())',
		url: './#/03/textarea?page=show+message',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				// Nvda doesn't have a next if the element is an input
				test.skip();
			}

			await voiceOver?.clearSpokenPhraseLog();
			await voiceOver?.previous(); // Focus "label 1"
			await voiceOver?.next(); // Focus "textarea 1"
			await voiceOver?.next(); // Focus "label 2"
			await voiceOver?.next(); // Focus "textarea 2"
			await voiceOver?.next(); // Focus "textarea 2 - helper message"
		}
	});
	testDefault({
		test,
		title: 'required',
		description: 'should inform user for changes',
		url: './#/03/textarea?page=required',
		async testFn(voiceOver, nvda) {
			if (voiceOver) {
				/* Goto desired input */
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.clearSpokenPhraseLog();
				await voiceOver?.next();
				await voiceOver?.type('Test');
				await voiceOver?.press('Command+A');
				await voiceOver?.press('Delete');
				await voiceOver?.type('Test');
			} else {
				await nvda?.press('Tab');
				await nvda?.type('Test');
				await nvda?.press('Control+A');
				await nvda?.press('Delete');
				await nvda?.type('Test');
			}
		},
		async postTestFn(voiceOver, nvda, retry) {
			if (nvda) {
				await generateSnapshot(nvda, retry);
			} else if (voiceOver) {
				/*
				 * There is a timing issue for macOS for typing in input we clean the result
				 */
				await generateSnapshot(voiceOver, retry, (phraseLog) =>
					phraseLog.map((log) =>
						log.replace('Test. ', '').replace('t. ', '')
					)
				);
			}
		}
	});
});
