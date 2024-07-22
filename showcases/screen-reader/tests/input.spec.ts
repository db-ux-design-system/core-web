import { getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBInput', () => {
	// We don't test default "next" here because we will be locked inside the textarea
	testDefault({
		test,
		title: 'should have message and label (tab)',
		url: './#/03/input?page=variant%20helper%20message',
		async testFn(voiceOver, nvda) {
			if (voiceOver) {
				await voiceOver?.press('Tab');
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.press('Tab');
			await screenReader?.clearSpokenPhraseLog();
			await nvda?.press('Shift+Tab');
			await nvda?.press('Tab');
		}
	});
});
