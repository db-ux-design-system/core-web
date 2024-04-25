import { getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBInput', () => {
	testDefault({
		test,
		title: 'should have message and label',
		url: './#/03/input?page=variant helper message',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader.next();
			await screenReader.previous();
			await screenReader.next();
		}
	});
});
