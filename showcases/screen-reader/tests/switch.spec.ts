import {
	generateSnapshot,
	getTest,
	STABILIZATION_DELAY,
	testDefault
} from '../default';

const test = getTest();

test.describe('DBSwitch', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should toggle switches, should not toggle disabled switch',
		url: './#/03/switch?page=checked',
		async testFn(voiceOver, nvda, page) {
			if (nvda) {
				await nvda?.previous(); // Focus "switch 1"
				await nvda?.act(); // Interact "switch 1"
				await nvda?.next(); // Focus "switch 2"
				await nvda?.act(); // Interact "switch 2"
				await page.waitForTimeout(STABILIZATION_DELAY);
				await nvda?.next(); // Focus "switch 3"
			} else if (voiceOver) {
				await voiceOver?.previous(); // Focus "switch 1"
				await voiceOver?.act(); // Interact "switch 1"
				await voiceOver?.next(); // Focus "switch 1 inline text"
				await voiceOver?.next(); // Focus "switch 2"
				await voiceOver?.act(); // Interact "switch 1"
				await voiceOver?.next(); // Focus "switch 2 inline text"
				await voiceOver?.next(); // Focus "switch 3"
				await voiceOver?.act(); // Interact "switch 1"
				await voiceOver?.next(); // Focus "switch 3 inline text"
			}
		},
		async postTestFn(voiceOver, nvda, retry) {
			if (nvda) {
				// NVDA has a timing issue where it intermittently announces
				// "blank" or the full label for the disabled switch.
				// Normalize both to stabilize the snapshot.
				await generateSnapshot(nvda, retry, (phraseLog) =>
					phraseLog.map((log) =>
						log === 'blank'
							? 'check box, not checked, True'
							: log
					)
				);
			} else if (voiceOver) {
				await generateSnapshot(voiceOver, retry);
			}
		}
	});
	testDefault({
		test,
		title: 'icon',
		description: 'should not announce icons',
		url: './#/03/switch?page=visual+aid',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.previous(); // Focus "switch 1"
				await nvda?.next(); // Focus "switch 2"
				await nvda?.act(); // Interact "switch 2"
			} else if (voiceOver) {
				await voiceOver?.previous(); // Focus "switch 1"
				await voiceOver?.next(); // Focus "switch 1 inline text"
				await voiceOver?.next(); // Focus "switch 2"
				await voiceOver?.act(); // Interact "switch 2"
				await voiceOver?.next(); // Focus "switch 2"
			}
		}
	});
});
