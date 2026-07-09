import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBNavigation', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have texts inline or as data-label attributes (next())',
		url: './#/05/navigation?page=density',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.next(); // Navigation Item 1
				await screenReader.next(); // Navigation Item 2
				await screenReader.previous(); // Navigation Item 1
				await screenReader.act(); // Open menu
				await screenReader.next(); // Sub-Navigation Item 1
				await screenReader.act(); // Open menu
				await screenReader.next(); // Sub-Sub-Navigation Item 1
				await screenReader.next(); // Sub-Sub-Navigation Item 2
				await screenReader.next(); // Sub-Navigation Item 2
				await screenReader.next(); // Navigation Item 2
				await screenReader.next(); // Navigation Item 3
			} else {
				await screenReader.next(); // Navigation "Functional"
				await screenReader.next(); // List A with 3 items
				await screenReader.next(); // 		Menu "Navi-Item 1" - current page
				await screenReader.next(); // 		List B with 2 items
				await screenReader.next(); // 			Menu "Sub-Navi-Item 1" - current page
				await screenReader.next(); // 			List C with 2 items
				await screenReader.next(); // 				Link "Sub-Sub-Navi-Item 1" - current page
				await screenReader.next(); // 				Link "Sub-Sub-Navi-Item 2"
				await screenReader.next(); // 			List C end
				await screenReader.next(); // 			Link "Sub-Navi-Item 2"
				await screenReader.next(); // 		List B end
				await screenReader.next(); // 		Link "Navi-Item 2"
				await screenReader.next(); // 		Link "Navi-Item 3" - dimmed
				await screenReader.next(); // List A end
			}
		}
	});
});
