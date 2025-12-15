import {
	type NVDAPlaywright,
	nvdaTest,
	type VoiceOverPlaywright,
	voiceOverTest
} from '@guidepup/playwright';
import { macOSRecord, windowsRecord } from '@guidepup/record';
import { expect } from '@playwright/test';
import { platform } from 'node:os';
import {
	type DefaultTestType,
	type RunTestType,
	type ScreenReaderTestType
} from './data';
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
	'expanded. expanded': 'expanded'
};

const cleanSpeakInstructions = (phraseLog: string[]): string[] => {
	const cleaned: string[] = [];

	for (const phrase of phraseLog) {
		const phraseParts = phrase.split('. ');
		let result = phraseParts
			.filter(
				(sPhrase) =>
					!standardPhrases.some((string) => sPhrase.includes(string))
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
			// Keep empty parts on Windows/NVDA to preserve snapshot placeholders
			.filter((part) => (isWin() ? true : part.length > 0))
			.join('. ');

		// We need to replace specific phrases, as they are being reported differently on localhost and within CI/CD
		for (const [key, value] of Object.entries(flakyExpressions)) {
			result = result.replaceAll(key, value);
		}

	// Windows/NVDA reorders role announcements: move "check box" to the front for consistency
	if (
		isWin() &&
		result.includes('check box') &&
		!result.startsWith('check box')
	) {
		const [before, after] = result.split('check box');
		const afterTrim = after?.replace(/^,?\s*/, '');
		const beforeTrim = before?.replace(/[,\s]*$/, '');
		result = `check box${afterTrim ? `, ${afterTrim}` : ''}${beforeTrim ? `, ${beforeTrim}` : ''}`;
	}

	// On Windows, we preserve even empty results to match snapshot baselines
	if (isWin()) {
		cleaned.push(result);
	} else if (result) {
		cleaned.push(result);
	}
	}

	return cleaned;
};

export const generateSnapshot = async (
	screenReader?: VoiceOverPlaywright | NVDAPlaywright,
	retry?: number,
	phraseLogConvertFn?: (phraseLog: string[]) => string[]
) => {
	if (!screenReader) return;

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
	nvda,
	voiceOver,
	retry
}: DefaultTestType & RunTestType) => {
	await page.goto(`${url}${additionalParams}`, {
		waitUntil: 'networkidle'
	});
	await page.waitForTimeout(500);

	let recorder: (() => void) | undefined;

	if (retry > 0) {
		const path = `./recordings/${title}-${retry}-${Date.now()}.mp4`;
		recorder = isWin() ? windowsRecord(path) : macOSRecord(path);
	}

	const screenRecorder: VoiceOverPlaywright | NVDAPlaywright | undefined =
		nvda ?? voiceOver;
	if (!screenRecorder) return;

	/**
	 * In macOS:Webkit the automaticallySpeakWebPage is active.
	 * Therefore, we need to move back with the cursor to the start and delete the logs before starting.
	 * In windows:Chrome the cursor is on the middle element.
	 * Therefore, we need to move back and delete the logs, and then start everything.
	 */
	await screenRecorder.navigateToWebContent();
	await page.waitForTimeout(500);

	await testFn?.(voiceOver, nvda);
	await postTestFn?.(voiceOver, nvda, retry);
	recorder?.();
};

export const testDefault = (defaultTestType: DefaultTestType) => {
	const { test, title, additionalParams, postTestFn } = defaultTestType;
	const fallbackPostFn = async (voiceOver, nvda, retry) => {
		await generateSnapshot(voiceOver ?? nvda, retry);
	};

	const testType: DefaultTestType = {
		...defaultTestType,
		postTestFn: postTestFn ?? fallbackPostFn,
		additionalParams:
			additionalParams ??
			'&color=neutral-bg-basic-level-1&density=regular'
	};

	if (isWin()) {
		test?.(title, async ({ page, nvda }, { retry }) => {
			await runTest({
				...testType,
				page,
				nvda,
				retry
			});
		});
	} else {
		test?.(title, async ({ page, voiceOver }, { retry }) => {
			await runTest({
				...testType,
				page,
				voiceOver,
				retry
			});
		});
	}
};

const isWin = (): boolean => platform() === 'win32';

export const getTest = (): ScreenReaderTestType =>
	isWin() ? nvdaTest : voiceOverTest;

// End of file
