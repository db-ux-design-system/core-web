// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { generateSnapshot, getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBDrawer', () => {
	testDefault({
		test,
		title: 'autofocus',
		description: 'should autofocus',
		url: './#/01/drawer?page=density',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.act();
			await screenReader?.next();
		},
		async postTestFn(voiceOver, nvda, retry) {
			if (nvda) {
				/*
				 * There is a timing issue for windows which results in different outputs in CICD.
				 * We avoid this by replacing the generated log files
				 */
				await generateSnapshot(nvda, retry, (phraseLog) =>
					phraseLog.map((log) =>
						log
							.replace('Showcase, document. unknown', 'button')
							.replace('unknown', 'button')
					)
				);
			} else if (voiceOver) {
				await generateSnapshot(voiceOver, retry);
			}
		}
	});
});
