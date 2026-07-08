import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBNotification', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have texts inline or as data-label attributes (next())',
		url: './#/06/notification?page=closeable',
		async testFn(screenReader) {
			if (isWin()) {
				// Skip functional notification
				await screenReader.previous(); // Text "(Default) False"
				await screenReader.next(); // Text "True"
				await screenReader.next(); // Button "Close"
			} else {
				await screenReader.next(); // Headline "Headline"
				await screenReader.next(); // Text "functional"
				await screenReader.next(); // Button "Close"
				await screenReader.next(); // Article end
			}
		}
	});
});
