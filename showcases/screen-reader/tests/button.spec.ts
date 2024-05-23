import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBButton', () => {
	testDefault({
		test,
		title: 'should not have icon in screen reader (next)',
		url: './#/02/button?page=content',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.next();
			await screenReader?.previous();
			await screenReader?.next();
			await screenReader?.next();
		}
	});
	testDefault({
		test,
		title: 'should not have icon in screen reader (tab)',
		url: './#/02/button?page=content',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.press('Tab');
			await screenReader?.press('Shift+Tab');
			await screenReader?.press('Tab');
			await screenReader?.press('Tab');
		}
	});
});
