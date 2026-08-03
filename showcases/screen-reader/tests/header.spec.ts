import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBHeader', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have links, an inline text, a navigation with a list and links, buttons (next())',
		url: './#/01/header?page=density',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.previous(); // Link "Imprint"
				await screenReader.next(); // Link "Help"
				await screenReader.next(); // DBHeader
				await screenReader.next(); // Link "Functional"
				await screenReader.next(); // Link "Functional disabled"
				await screenReader.next(); // Button "Search"
				await screenReader.next(); // Button "Profile"
				await screenReader.next(); // Button "Notification"
				await screenReader.next(); // Button "Help"
			} else {
				await screenReader.next(); // Link "Imprint"
				await screenReader.next(); // Link "Help"
				await screenReader.next(); // DBHeader
				await screenReader.next(); // Navigation "Functional"
				await screenReader.next(); // List
				await screenReader.next(); // Link "Functional"
				await screenReader.next(); // Link dimmed "Functional disabled"
				await screenReader.next(); // List end
				await screenReader.next(); // Navigation end
				await screenReader.next(); // Button "Search"
				await screenReader.next(); // Button "Profile"
				await screenReader.next(); // Button "Notification"
				await screenReader.next(); // Button "Help"
			}
		}
	});
});
