import { nvdaTest as test } from '@guidepup/playwright';
import { testDefault } from '../default';

test.describe('DBRadio', () => {
	testDefault(
		test,
		'should label duplicated',
		'./#/03/radio?page=density',
		async (nvda) => {
			await nvda.press('ArrowLeft');
			await nvda.press('ArrowRight');
			await nvda.press('ArrowRight');
		}
	);
});
