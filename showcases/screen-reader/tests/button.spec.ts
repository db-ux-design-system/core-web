import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBButton', () => {
	testDefault({
		test,
		title: 'should not have icon in screen reader (next)',
		url: './#/02/button?page=content',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			} else if (voiceOver) {
				await voiceOver?.previous();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous();
			await screenReader?.next();
			await screenReader?.next();
		}
	});
	testDefault({
		test,
		title: 'should not have icon in screen reader (tab)',
		url: './#/02/button?page=content',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.press('Tab');
			} else if (voiceOver) {
				await voiceOver?.press('Shift+Tab');
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await nvda?.press('Shift+Tab');
			await nvda?.press('Tab');
			await nvda?.press('Tab');
		}
	});
});
