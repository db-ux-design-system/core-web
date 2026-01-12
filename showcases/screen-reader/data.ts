import {
	type NVDAPlaywright,
	type VoiceOverPlaywright
} from '@guidepup/playwright';
import {
	type Page,
	type PlaywrightTestArgs,
	type PlaywrightTestOptions,
	type PlaywrightWorkerArgs,
	type PlaywrightWorkerOptions,
	type TestType
} from '@playwright/test';

export type ScreenReaderTestType = TestType<
	PlaywrightTestArgs &
		PlaywrightTestOptions & {
			nvda?: NVDAPlaywright;
			voiceOver?: VoiceOverPlaywright;
		},
	PlaywrightWorkerArgs & PlaywrightWorkerOptions
>;

export type DefaultTestType = {
	test?: ScreenReaderTestType;
	/**
	 * Should be very short because this will be the name for the output
	 */
	title: string;
	description: string;
	url: string;
	testFn?: (
		voiceOver?: VoiceOverPlaywright,
		nvda?: NVDAPlaywright
	) => Promise<void>;
	postTestFn?: (
		voiceOver?: VoiceOverPlaywright,
		nvda?: NVDAPlaywright,
		retry?: number
	) => Promise<void>;
	additionalParams?: string;
};

export type RunTestType = {
	page: Page;
	retry: number;
	browserName?: string;
	nvda?: NVDAPlaywright;
	voiceOver?: VoiceOverPlaywright;
};
