import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBHeader', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have links, an inline text, a navigation with a list and links, buttons (next())',
		url: './#/01/header?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.previous(); // Link "Imprint"
				await nvda?.next(); // Link "Help"
				await nvda?.next(); // DBHeader
				await nvda?.next(); // Link "Functional"
				await nvda?.next(); // Link "Functional disabled"
				await nvda?.next(); // Button "Search"
				await nvda?.next(); // Button "Profile"
				await nvda?.next(); // Button "Notification"
				await nvda?.next(); // Button "Help"
			} else if (voiceOver) {
				await voiceOver?.next(); // Link "Imprint"
				await voiceOver?.next(); // Link "Help"
				await voiceOver?.next(); // DBHeader
				await voiceOver?.next(); // Navigation "Functional"
				await voiceOver?.next(); // List
				await voiceOver?.next(); // Link "Functional"
				await voiceOver?.next(); // Link dimmed "Functional disabled"
				await voiceOver?.next(); // List end
				await voiceOver?.next(); // Navigation end
				await voiceOver?.next(); // Button "Search"
				await voiceOver?.next(); // Button "Profile"
				await voiceOver?.next(); // Button "Notification"
				await voiceOver?.next(); // Button "Help"
			}
		}
	});
});
