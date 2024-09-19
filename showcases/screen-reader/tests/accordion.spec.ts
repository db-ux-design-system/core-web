import type { NVDAPlaywright, VoiceOverPlaywright } from '@guidepup/playwright';
import { generateSnapshot, getTest, testDefault } from '../default';

const test = getTest();

const postTestFn = async (
	voiceOver?: VoiceOverPlaywright,
	nvda?: NVDAPlaywright,
	retry?: number
) => {
	if (nvda) {
		/*
		 * There is an issue with nvda duplicating expanded sometimes
		 */
		await generateSnapshot(nvda, retry, (phraseLog) =>
			phraseLog.map((log) =>
				log.replace('expanded. expanded', 'expanded')
			)
		);
	} else if (voiceOver) {
		await generateSnapshot(voiceOver, retry);
	}
};

test.describe('DBAccordion', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should open first item (next)',
		url: './#/04/accordion?page=behaviour',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.next(); // Focus: "item 1"
			await screenReader?.next(); // Focus: "item 2"
			await screenReader?.previous(); // Focus: "item 1"
			await screenReader?.act(); // Interact: "item 1"
			await screenReader?.next(); // Focus: "content 1"
			await screenReader?.next(); // Focus: "item 2"
		},
		postTestFn
	});
});
