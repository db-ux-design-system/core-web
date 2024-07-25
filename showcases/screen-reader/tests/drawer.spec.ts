import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBDrawer', () => {
	testDefault({
		test,
		title: 'should autofocus',
		url: './#/01/drawer?page=density',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.act();
			await screenReader?.next();
		}
	});
});
