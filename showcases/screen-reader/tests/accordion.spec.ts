import { type ScreenReaderPlaywright } from '@guidepup/playwright';
import { generateSnapshot, getTest, testDefault } from '../default';

const test = getTest();

const postTestFn = async (
	screenReader: ScreenReaderPlaywright,
	retry?: number
) => {
	/*
	 * There is an issue with nvda duplicating expanded sometimes
	 */
	await generateSnapshot(screenReader, retry, (phraseLog) =>
		phraseLog.map((log) => log.replace('expanded. expanded', 'expanded'))
	);
};

test.describe('DBAccordion', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should open first item (next)',
		url: './#/04/accordion?page=behavior',
		async testFn(screenReader) {
			await screenReader.clearSpokenPhraseLog();
			await screenReader.next(); // Focus: "item 1"
			await screenReader.next(); // Focus: "item 2"
			await screenReader.previous(); // Focus: "item 1"
			await screenReader.act(); // Interact: "item 1"
			await screenReader.next(); // Focus: "content 1"
			await screenReader.next(); // Focus: "item 2"
		},
		postTestFn
	});
});
