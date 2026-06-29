import { generateSnapshot, getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBInput', () => {
	testDefault({
		test,
		title: 'next()',
		description: 'should have message and label (next())',
		url: './#/03/input?page=show+message',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				// Nvda doesn't have a next if the element is an input
				test.skip();
			}

			// We are on the label after loading
			// Every element (input, label) will be read as single element
			await voiceOver?.next();
			await voiceOver?.next();
			await voiceOver?.next();
			await voiceOver?.next();
		}
	});
	testDefault({
		test,
		title: 'tab',
		description: 'should have message and label (tab)',
		url: './#/03/input?page=show+message',
		async testFn(voiceOver, nvda) {
			if (voiceOver) {
				// Voiceover isn't working with tab in pipeline
				test.skip();
			}

			await nvda?.press('Tab');
			await nvda?.clearSpokenPhraseLog();
			await nvda?.press('Shift+Tab');
			await nvda?.press('Tab');
		}
	});
	testDefault({
		test,
		title: 'required',
		description: 'should inform user for changes',
		url: './#/03/input?page=required',
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
