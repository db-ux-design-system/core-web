import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBControlPanelMobile', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have a burger menu button that opens a drawer with navigation (next())',
		url: './#/05/control-panel-mobile?page=examples',
		async testFn(voiceOver, nvda, page) {
			if (nvda) {
				await nvda?.previous(); // Button "BurgerMenu"
				await nvda?.act(); // Open drawer
				await page?.waitForTimeout(500);
				await nvda?.next(); // Link "Page 1"
				await nvda?.next(); // Link "Page 2"
			}
		}
	});
});
