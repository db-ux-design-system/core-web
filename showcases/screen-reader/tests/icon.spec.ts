import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBIcon', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should not mention icon (next())',
		url: './#/04/icon?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				/* We don't have a focusable element, so we are initially on the browser (i) button */
				await nvda.press('Shift+Tab'); // Jump into the website -> infotext "Functional"
				await nvda?.clearSpokenPhraseLog();
				await nvda?.next(); // Reading all infotext together
			} else if (voiceOver) {
				await voiceOver?.previous(); // Infotext "Functional"
				await voiceOver?.next(); // Infotext "(Default) Regular"
			}
		}
	});
});
