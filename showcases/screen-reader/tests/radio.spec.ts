import { getTest, testDefault } from '../default';

const test = getTest();
test.describe('DBRadio', () => {
	testDefault({
		test,
		title: 'should label duplicated (next)',
		url: './#/03/radio?page=density',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			if (nvda) {
				await screenReader?.next();
				await screenReader?.previous();
			}

			await screenReader?.next();
			await screenReader?.next();
		}
	});
	testDefault({
		test,
		title: 'should label duplicated (arrows)',
		url: './#/03/radio?page=density',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			if (nvda) {
				await screenReader?.press('Left');
				await screenReader?.press('Left');
			}

			await screenReader?.press('Right');
			await screenReader?.press('Right');
		}
	});
});
