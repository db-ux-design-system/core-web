import { getTest, isWin, testDefault } from '../default';

const test = getTest();
test.describe('DBPopover', () => {
	testDefault({
		test,
		title: 'opened',
		description: 'should open the popover',
		url: './#/01/popover?page=density',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.act(); // Opening first popover
				await screenReader.press('Tab'); // Tab to button inside popover
				await screenReader.next(); // Navigating to default button
				await screenReader.clearSpokenPhraseLog();
				await screenReader.act(); // Read button + opening second popover -> should jump to article
				await screenReader.next(); // Navigating to first item of list within popover
				await screenReader.next(); // Navigating to section item of list within popover
				await screenReader.next(); // Navigating to button within popover
				await screenReader.next(); // Navigating to next button
			} else {
				await screenReader.next(); // Opening first popover and navigating to the included "article"
				await screenReader.next(); // Navigating to list within popover
				await screenReader.next(); // Navigating to first item of list within popover
				await screenReader.next(); // Navigating to section item of list within popover
				await screenReader.next(); // Navigating to end of list within popover
				await screenReader.next(); // Navigating to button within popover
				await screenReader.next(); // Navigating to end of article
				await screenReader.next(); // Navigating to next button and open next popover
			}
		}
	});
});
