import { expect } from '@playwright/test';
import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBHeading', () => {
	testDefault({
		test,
		title: 'heading-navigation',
		description:
			'should navigate semantic heading levels with heading commands',
		url: './#/04/heading?page=semantic+levels',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			if (!screenReader) {
				return;
			}

			await screenReader.nextHeading();
			expect(await screenReader.itemText()).toContain('h1 maps to xl');
			await screenReader.nextHeading();
			expect(await screenReader.itemText()).toContain('h2 maps to lg');
			await screenReader.previousHeading();
			expect(await screenReader.itemText()).toContain('h1 maps to xl');
		},
		async postTestFn() {
			await Promise.resolve();
		}
	});
});
