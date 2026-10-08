import { type NVDAPlaywright } from '@guidepup/playwright';
import { getTest, testDefault } from '../default';

const test = getTest();

const RADIO_COUNT = 3;

/**
 * The density example renders its radio group without a pre-selected radio, so
 * which radio the first arrow key selects is up to the browser: Blink used to
 * select the focused (first) radio and now moves on to the next one. Both tests
 * below only cycle through the group, which makes their spoken phrase log a
 * rotation of the same three phrases - anchoring on the first radio before
 * recording keeps that rotation out of the snapshot.
 */
const anchorOnFirstRadio = async (nvda: NVDAPlaywright) => {
	for (let index = 0; index < RADIO_COUNT; index++) {
		await nvda.press('Right');
		const spokenPhrase = await nvda.lastSpokenPhrase();

		if (spokenPhrase.includes('1 of 3')) {
			return;
		}
	}

	throw new Error('Could not anchor the cursor on the first radio');
};

test.describe('DBRadio', () => {
	testDefault({
		test,
		title: 'next()',
		description: 'should label duplicated (next())',
		url: './#/03/radio?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await anchorOnFirstRadio(nvda);
				await nvda?.next();
				await nvda?.clearSpokenPhraseLog();
				await nvda?.previous();
				await nvda?.next();
				await nvda?.next();
			} else if (voiceOver) {
				// We are on the radio group after loading
				// Every element (radio, label) will be read as single element
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.next();
				await voiceOver?.next();
			}
		}
	});
	testDefault({
		test,
		title: 'arrows',
		description: 'should label duplicated (arrows)',
		url: './#/03/radio?page=density',
		async testFn(voiceOver, nvda) {
			if (voiceOver) {
				// Voiceover isn't working with tab in pipeline
				test.skip();
			}

			if (nvda) {
				await anchorOnFirstRadio(nvda);
			}

			await nvda?.press('Left');
			await nvda?.clearSpokenPhraseLog();
			await nvda?.press('Left');
			await nvda?.press('Right');
			await nvda?.press('Right');
		}
	});
});
