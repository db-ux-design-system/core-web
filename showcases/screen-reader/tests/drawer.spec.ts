import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBDrawer', () => {
	testDefault({
		test,
		title: 'autofocus',
		description: 'should autofocus',
		url: './#/01/drawer?page=density',
		async testFn(voiceOver, nvda, page) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.previous();
			await screenReader?.act();
			await screenReader?.next();
		}
	});
});
