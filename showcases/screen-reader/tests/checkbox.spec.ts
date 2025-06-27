import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBCheckbox', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should tick and untick checkbox, feedback messages must appear',
		url: './#/03/checkbox?page=required',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next(); // Focus checkbox 2
				await nvda?.act(); // Tick checkbox 2
				await nvda?.act(); // Tick checkbox 2
				await nvda?.next(); // Focus checkbox 2 label
				await nvda?.next(); // Focus checkbox 2 message
			} else if (voiceOver) {
				await voiceOver?.next(); // Focus checkbox 1
				await voiceOver?.next(); // Focus checkbox 1 label
				await voiceOver?.clearSpokenPhraseLog();

				await voiceOver?.next(); // Focus checkbox 2
				await voiceOver?.act(); // Tick checkbox 2
				await voiceOver?.act(); // Tick checkbox 2
				await voiceOver?.next(); // Focus checkbox 2 label
				await voiceOver?.next(); // Focus checkbox 2 message
			}
		}
	});
});
