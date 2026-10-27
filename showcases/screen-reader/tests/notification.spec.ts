import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBNotification', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have texts inline or as data-label attributes (next())',
		url: './#/06/notification?page=closeable',
		async testFn(voiceOver, nvda, page) {
			if (nvda) {
				// Skip functional notification
				await nvda?.previous(); // Text "(Default) False"
				await nvda?.next(); // Text "True"
				await nvda?.next(); // Button "Close"
			} else if (voiceOver) {
				// Wait for VoiceOver to settle after page load
				await page?.waitForTimeout(500);

				await voiceOver?.next(); // Headline "Headline"
				await voiceOver?.next(); // Text "functional"
				await voiceOver?.next(); // Button "Close"
				await voiceOver?.next(); // Article end
			}
		}
	});
});
