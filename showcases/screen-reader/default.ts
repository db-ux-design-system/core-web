/* eslint-disable import/no-anonymous-default-export */
import { platform } from 'node:os';
import {
	type NVDAPlaywright,
	nvdaTest,
	type VoiceOverPlaywright,
	voiceOverTest
} from '@guidepup/playwright';
import { macOSRecord, windowsRecord } from '@guidepup/guidepup';
import { expect } from '@playwright/test';
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
	'To move between items'
];

const cleanSpeakInstructions = (phraseLog: string[]): string[] =>
	phraseLog.map((phrase) =>
		phrase
			.split('. ')
			.filter(
				(sPhrase) =>
					!standardPhrases.some((string) => sPhrase.includes(string))
			)
			.join('. ')
			// We need to replace specific phrases, as they are being reported differently on localhost and within CI/CD
			.replaceAll('pop-up', 'pop up')
	);

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
	 * In macOS:Webkit the [automaticallySpeakWebPage](https://github.com/guidepup/guidepup/blob/main/src/macOS/VoiceOver/configureSettings.ts#L58) is active.
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

	const trimTitleForShortSnapshotName = title.slice(0, 10);
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

export default { testDefault, generateSnapshot, getTest };
