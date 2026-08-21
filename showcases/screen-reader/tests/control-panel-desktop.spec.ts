import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBControlPanelDesktop', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have navigation with links, buttons and a collapse button (next())',
		url: './#/05/control-panel-desktop?page=examples',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.previous(); // Link "With Application Name + Navigation"
				await nvda?.next(); // Link "With Application Name disabled"
				await nvda?.next(); // Button "Search"
			}
		}
	});
});
