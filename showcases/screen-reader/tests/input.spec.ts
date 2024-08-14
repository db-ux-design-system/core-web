import { NVDAKeyCodeCommands } from '@guidepup/guidepup';
import { getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBInput', () => {
	testDefault({
		test,
		title: 'next()',
		description: 'should have message and label (next())',
		url: './#/03/input?page=variant%20helper%20message',
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
		url: './#/03/input?page=variant%20helper%20message',
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
		url: './#/03/input?page=requirement',
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
		}
	});
});
