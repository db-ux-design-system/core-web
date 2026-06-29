import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBNavigation', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have texts inline or as data-label attributes (next())',
		url: './#/05/navigation?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next(); // Navigation Item 1
				await nvda?.next(); // Navigation Item 2
				await nvda?.previous(); // Navigation Item 1
				await nvda?.act(); // Open menu
				await nvda?.next(); // Sub-Navigation Item 1
				await nvda?.act(); // Open menu
				await nvda?.next(); // Sub-Sub-Navigation Item 1
				await nvda?.next(); // Sub-Sub-Navigation Item 2
				await nvda?.next(); // Sub-Navigation Item 2
				await nvda?.next(); // Navigation Item 2
				await nvda?.next(); // Navigation Item 3
			} else if (voiceOver) {
				await voiceOver?.next(); // Navigation "Functional"
				await voiceOver?.next(); // List A with 3 items
				await voiceOver?.next(); // 		Menu "Navi-Item 1" - current page
				await voiceOver?.next(); // 		List B with 2 items
				await voiceOver?.next(); // 			Menu "Sub-Navi-Item 1" - current page
				await voiceOver?.next(); // 			List C with 2 items
				await voiceOver?.next(); // 				Link "Sub-Sub-Navi-Item 1" - current page
				await voiceOver?.next(); // 				Link "Sub-Sub-Navi-Item 2"
				await voiceOver?.next(); // 			List C end
				await voiceOver?.next(); // 			Link "Sub-Navi-Item 2"
				await voiceOver?.next(); // 		List B end
				await voiceOver?.next(); // 		Link "Navi-Item 2"
				await voiceOver?.next(); // 		Link "Navi-Item 3" - dimmed
				await voiceOver?.next(); // List A end
			}
		}
	});
});
