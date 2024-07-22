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
			if (voiceOver) {
				await voiceOver?.stopInteracting();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.press('Tab');
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.press('Shift+Tab');
			await screenReader?.press('Tab');
			await screenReader?.press('Tab');
		}
	});
});
