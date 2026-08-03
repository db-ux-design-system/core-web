import {
	type ScreenReaderPlaywright,
	screenReaderTest
} from '@guidepup/playwright';
import { macOSRecord, windowsRecord } from '@guidepup/record';
import { expect } from '@playwright/test';
import { platform } from 'node:os';
import { type DefaultTestType, type RunTestType } from './data';
import { translations } from './translations';

const standardPhrases = [
	'You are currently',
	'To enter',
	'To exit',
	'To click',
	'To select',
	'To interact',
	'Press Control',
	'To begin interacting',
	'To display a',
	'To move between items',
	'To close',
	'To choose',
	'To toggle',
	'To expand',
	'Login Items',
	'You can manage',
	'To open'
];

const flakyExpressions: Record<string, string> = {
	'pop-up': 'pop up',
	'checked. checked': 'checked',
	'selected. selected': 'selected',
	'expanded. expanded': 'expanded',
	'not checked. not checked': 'not checked'
};

const cleanSpeakInstructions = (phraseLog: string[]): string[] =>
	phraseLog.map((phrase) => {
		const phraseParts = phrase.split('. ');
		let result = phraseParts
			.filter((sPhrase) =>
				standardPhrases.every((string) => !sPhrase.includes(string))
			)
			.map((part, index) => {
				// There is an issue with macOS duplicating some parts, we remove the duplicates here
				if (!isWin()) {
					let lastFoundIndex = -1;
					for (const pPart of phraseParts) {
						const pPartIndex = phraseParts.indexOf(pPart);
						if (pPart !== part && part.includes(pPart)) {
							lastFoundIndex = pPartIndex;
						}
					}

					if (lastFoundIndex > -1 && lastFoundIndex !== index) {
						return '';
					}
				}

				return part;
			})
			.filter((part) => part.length > 0)
			.join('. ');

		// We need to replace specific phrases, as they are being reported differently on localhost and within CI/CD
		for (const [key, value] of Object.entries(flakyExpressions)) {
			result = result.replaceAll(key, value);
		}

		return result;
	});

export const generateSnapshot = async (
	screenReader?: ScreenReaderPlaywright,
	retry?: number,
	phraseLogConvertFn?: (phraseLog: string[]) => string[]
) => {
	if (!screenReader) {
		return;
	}

	let phraseLog: string[] = await screenReader.spokenPhraseLog();

	if (retry && retry > 0) {
		process.stdout.write(JSON.stringify(phraseLog));
	}

	phraseLog = cleanSpeakInstructions(phraseLog);

	if (phraseLogConvertFn) {
		phraseLog = phraseLogConvertFn(phraseLog);
	}

	let snapshot = JSON.stringify(phraseLog);

	for (const [key, values] of Object.entries(translations)) {
		for (const value of values) {
			snapshot = snapshot.replaceAll(value, key);
		}
	}

	expect(snapshot).toMatchSnapshot();
};

export const runTest = async ({
	title,
	url,
	testFn,
	postTestFn,
	additionalParams,
	page,
	screenReader,
	retry
}: DefaultTestType & RunTestType) => {
	await page.goto(`${url}${additionalParams}`, {
		waitUntil: 'networkidle'
	});

	let recorder: (() => void) | undefined;

	if (retry > 0) {
		const path = `./recordings/${title}-${retry}-${Date.now()}.mp4`;
		recorder = isWin() ? windowsRecord(path) : macOSRecord(path);
	}

	await screenReader.navigateToWebContent();

	await testFn?.(screenReader, page);
	await postTestFn?.(screenReader, retry);
	recorder?.();
};

export const testDefault = (defaultTestType: DefaultTestType) => {
	const { test, title, additionalParams, postTestFn } = defaultTestType;
	const fallbackPostFn = async (
		screenReader: ScreenReaderPlaywright,
		retry?: number
	) => {
		await generateSnapshot(screenReader, retry);
	};

	const testType: DefaultTestType = {
		...defaultTestType,
		postTestFn: postTestFn ?? fallbackPostFn,
		additionalParams:
			additionalParams ??
			'&color=neutral-bg-basic-level-1&density=regular'
	};

	test?.use({ screenReaderStartOptions: { capture: true } });
	test?.(title, async ({ page, screenReader }, { retry }) => {
		await runTest({
			...testType,
			page,
			screenReader,
			retry
		});
	});
};

export const isWin = (): boolean => platform() === 'win32';

export const getTest = () => screenReaderTest;
