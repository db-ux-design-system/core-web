import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBCheckbox', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should tick and untick checkbox, feedback messages must appear',
		url: './#/03/checkbox?page=required',
		async testFn(voiceOver, nvda, page) {
			if (nvda) {
				await nvda?.next(); // Focus checkbox 2
				await nvda?.act(); // Tick checkbox 2
				await page?.waitForTimeout(300);
				await nvda?.act(); // Untick checkbox 2
				await nvda?.next(); // Focus checkbox 2 label
				await nvda?.next(); // Focus checkbox 2 message
			} else if (voiceOver) {
				await voiceOver?.next(); // Focus checkbox 1
				await voiceOver?.next(); // Focus checkbox 1 label
				await voiceOver?.clearSpokenPhraseLog();

				await voiceOver?.next(); // Focus checkbox 2
				await voiceOver?.act(); // Tick checkbox 2

				// Wait for VoiceOver to process the checkbox state change
				await page?.waitForTimeout(500);

				await voiceOver?.act(); // Untick checkbox 2

				// Wait for VoiceOver to process the checkbox state change
				await page?.waitForTimeout(500);

				await voiceOver?.next(); // Focus checkbox 2 label
				await voiceOver?.next(); // Focus checkbox 2 message
			}
		}
	});
});
