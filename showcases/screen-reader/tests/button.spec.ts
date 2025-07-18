import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBButton', () => {
	testDefault({
		test,
		title: 'next()',
		description: 'should not have icon in screen reader (next())',
		url: './#/02/button?page=show+icon+leading',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous();
			await screenReader?.next();
		}
	});
	testDefault({
		test,
		title: 'tab',
		description: 'should not have icon in screen reader (tab)',
		url: './#/02/button?page=show+icon+leading',
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
});
