import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBTooltip', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have buttons with tooltips',
		url: './#/04/tooltip?page=density',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.press('Tab'); // Focus "button 2 with tooltip"
				await screenReader.press('Tab'); // Focus "button 3 with tooltip"
			} else {
				await screenReader.previous(); // Focus "button 1 with tooltip"
				await screenReader.next(); // Focus "button 2 with tooltip"
			}
		}
	});
});
