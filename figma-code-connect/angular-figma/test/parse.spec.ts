import { describe, expect, test } from 'vitest';
import { getParsedFigmaConnect } from '../../parse-utils';

describe('figma', () => {
	test('check if parse has same snapshot', async () => {
		expect(getParsedFigmaConnect()).matchSnapshot();
	});
});
