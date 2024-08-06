import { getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBRadio', () => {
	testDefault({
		test,
		title: 'should label duplicated (next())',
		url: './#/03/radio?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
				await nvda?.clearSpokenPhraseLog();
				await nvda?.previous();
				await nvda?.next();
				await nvda?.next();
			} else if (voiceOver) {
				// We are on the radio group after loading
				// Every element (radio, label) will be read as single element
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.next();
			}
		}
	});
	testDefault({
		test,
		title: 'should label duplicated (arrows)',
		url: './#/03/radio?page=density',
		async testFn(voiceOver, nvda) {
			if (voiceOver) {
				// Voiceover isn't working with tab in pipeline
				test.skip();
			}

			await nvda?.press('Left');
			await nvda?.clearSpokenPhraseLog();
			await nvda?.press('Left');
			await nvda?.press('Right');
			await nvda?.press('Right');
		}
	});
});
