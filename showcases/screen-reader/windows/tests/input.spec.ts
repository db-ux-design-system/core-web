import { nvdaTest as test } from '@guidepup/playwright';
import { testDefault, sayAll, generateSnapshot } from '../default';

test.describe('DBInput', () => {
	testDefault(
		test,
		'should have message and label',
		'./#/03/input?page=variant helper message',
		async (nvda) => {
			await nvda.press('Tab');
			await nvda.press('Shift+Tab');
			await nvda.press('Tab');
		},
		async (nvda) => generateSnapshot(nvda, true)
	);
});
