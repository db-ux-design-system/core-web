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

const translations: Record<string, string[]> = {
	button: ['Schalter'],
	edit: ['Eingabefeld'],
	'radio button': ['Auswahlschalter'],
	blank: ['Leer'],
	checked: ['aktiviert'],
	' of ': [' von '],
	clickable: ['anklickbar'],
	'has auto complete': ['mit Auto Vervollständigung']
};

const cleanSpeakInstructions = (phraseLog: string[]): string[] =>
	phraseLog.map((phrase) =>
		phrase
			.split('. ')
			.filter(
				(sPhrase) =>
					!(
						sPhrase.includes('You are currently') ||
						sPhrase.includes('To enter') ||
						sPhrase.includes('To exit') ||
						sPhrase.includes('To click') ||
						sPhrase.includes('To select') ||
						sPhrase.includes('To interact') ||
						sPhrase.includes('Press Control')
					)
			)
			.join('. ')
	);

export const generateSnapshot = async (
	screenReader?: VoiceOverPlaywright | NVDAPlaywright,
	shiftFirst?: boolean
) => {
	if (!screenReader) return;

	let phraseLog: string[] = await screenReader.spokenPhraseLog();
	if (shiftFirst) {
		phraseLog.shift();
	}

	phraseLog = cleanSpeakInstructions(phraseLog);

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

	if (retry > 1) {
		const path = `./recordings/${title}-${Date.now()}.mp4`;
		recorder = isWin() ? windowsRecord(path) : macOSRecord(path);
	}

	const screenRecorder = nvda ?? voiceOver;
	if (!screenRecorder) return;

	await screenRecorder.navigateToWebContent();
	await page.waitForTimeout(500);
	await testFn?.(voiceOver, nvda);
	await postTestFn?.(voiceOver, nvda);
	recorder?.();
};

export const testDefault = (defaultTestType: DefaultTestType) => {
	const { test, title, additionalParams, postTestFn } = defaultTestType;
	const fallbackPostFn = async (voiceOver, nvda) => {
		await generateSnapshot(voiceOver ?? nvda, true);
	};

	const testType: DefaultTestType = {
		...defaultTestType,
		postTestFn: postTestFn ?? fallbackPostFn,
		additionalParams:
			additionalParams ?? '&color=neutral-bg-lvl-1&density=regular'
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

export default { testDefault, generateSnapshot, getTest };
