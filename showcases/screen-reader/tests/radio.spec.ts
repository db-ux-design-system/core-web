import { getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBRadio', () => {
	testDefault({
		test,
		title: 'should label duplicated (next)',
		url: './#/03/radio?page=density',
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
		title: 'should label duplicated (arrows)',
		url: './#/03/radio?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.press('Left');
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.press('Left');
			await screenReader?.press('Right');
			await screenReader?.press('Right');
		}
	});
});
