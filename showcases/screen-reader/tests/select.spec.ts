import { generateSnapshot, getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBSelect', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should open and close select (next())',
		url: './#/03/select?page=density',
		async testFn(voiceOver, nvda, page) {
			if (nvda) {
				await nvda?.press('Tab'); // Focus select
				await nvda?.act(); // Open select
				await nvda?.next(); // Option 1
				await nvda?.next(); // Option 2
			} else if (voiceOver) {
				await voiceOver?.clearSpokenPhraseLog();
				await voiceOver?.next(); // Focus select
				await voiceOver?.act(); // Open select

				// Wait for VoiceOver to process the popup opening
				await page?.waitForTimeout(500);

				await voiceOver?.press('ArrowDown'); // Move to "Option 1"
				await voiceOver?.press('ArrowDown'); // Move to "Option 2"
				await voiceOver?.act(); // Select "Option 2"

				// Wait for VoiceOver to process the selection and popup closing
				await page?.waitForTimeout(500);
			}
		},
		async postTestFn(voiceOver, nvda, retry) {
			if (nvda) {
				await generateSnapshot(nvda, retry);
			} else if (voiceOver) {
				/*
				 * There is a timing issue for macOS for reading menu items length.
				 * The checkmark is stripped by non-ASCII normalization, so we
				 * remove any standalone "menu N items" prefix that appears.
				 */
				await generateSnapshot(voiceOver, retry, (phraseLog) =>
					phraseLog.map((log) => log.replace(/menu \d+ items\s*/, ''))
				);
			}
		}
	});
});
