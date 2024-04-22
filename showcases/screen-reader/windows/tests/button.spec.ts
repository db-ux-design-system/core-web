import { nvdaTest as test } from '@guidepup/playwright';
import { generateSnapshot, testDefault } from '../default';

test.describe('DBButton', () => {
	testDefault(
		test,
		'should not have icon in screen reader',
		'./#/02/button?page=content',
		async (nvda) => {
			await nvda.press('Tab');
			await nvda.press('Shift+Tab');
			await nvda.press('Tab');
			await nvda.press('Tab');
		},
		async (nvda) => generateSnapshot(nvda, true)
	);
});
