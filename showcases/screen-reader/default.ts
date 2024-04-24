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
	' of ': [' von ']
};

const cleanSpeakInstructions = (phraseLog: string[]): string[] =>
	phraseLog.map((phrase) =>
		phrase
			.split('. ')
			.filter(
				(sPhrase) =>
					!(
						sPhrase.startsWith('You are currently') ||
						sPhrase.startsWith('To enter') ||
						sPhrase.startsWith('To exit') ||
						sPhrase.startsWith('To click') ||
						sPhrase.startsWith('To select')
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

	if (process.env.CI && retry > 0) {
		const path = `./${
			process.env.showcase
		}/test-results/${title}-${Date.now()}.mp4`;
		recorder = isWin() ? windowsRecord(path) : macOSRecord(path);
	}

	const screenRecorder = nvda ?? voiceOver;
	if (!screenRecorder) return;
	await screenRecorder.navigateToWebContent();
	await testFn(voiceOver, nvda);
	await postTestFn?.(voiceOver, nvda);
	recorder?.();
};

export const testDefault = ({
	test,
	title,
	url,
	testFn,
	postTestFn = async (voiceOver, nvda) => {
		await generateSnapshot(voiceOver ?? nvda, true);
	},
	additionalParams = '&color=neutral-bg-lvl-1&density=regular'
}: DefaultTestType) => {
	if (isWin()) {
		test?.(title, async ({ page, nvda }, testInfo) => {
			await runTest({
				title,
				page,
				nvda,
				url,
				testFn,
				postTestFn,
				additionalParams,
				retry: testInfo.retry
			});
		});
	} else {
		test?.(title, async ({ page, voiceOver }, testInfo) => {
			await runTest({
				title,
				page,
				voiceOver,
				url,
				testFn,
				postTestFn,
				additionalParams,
				retry: testInfo.retry
			});
		});
	}
};

const isWin = (): boolean => platform() === 'win32';

export const getTest = (): ScreenReaderTestType =>
	isWin() ? nvdaTest : voiceOverTest;

export default { testDefault, generateSnapshot, getTest };
