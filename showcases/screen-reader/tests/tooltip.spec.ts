// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBTooltip', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have buttons with tooltips',
		url: './#/04/tooltip?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.press('Tab'); // Focus "button 2 with tooltip"
				await nvda?.press('Tab'); // Focus "button 3 with tooltip"
			} else if (voiceOver) {
				await voiceOver?.previous(); // Focus "button 1 with tooltip"
				await voiceOver?.next(); // Focus "button 2 with tooltip"
			}
		}
	});
});
