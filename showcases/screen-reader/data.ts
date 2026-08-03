import { type ScreenReaderPlaywright } from '@guidepup/playwright';
import {
	type Page,
	type PlaywrightTestArgs,
	type PlaywrightTestOptions,
	type PlaywrightWorkerArgs,
	type PlaywrightWorkerOptions,
	type TestType
} from '@playwright/test';

type ScreenReaderTestType = TestType<
	PlaywrightTestArgs &
		PlaywrightTestOptions & {
			screenReader: ScreenReaderPlaywright;
			screenReaderStartOptions: { capture?: boolean | 'initial' };
		},
	PlaywrightWorkerArgs & PlaywrightWorkerOptions
>;

export type DefaultTestType = {
	test?: ScreenReaderTestType;
	/**
	 Should be very short because this will be the name for the output
	 */
	title: string;
	description: string;
	url: string;
	testFn?: (
		screenReader: ScreenReaderPlaywright,
		page?: Page
	) => Promise<void>;
	postTestFn?: (
		screenReader: ScreenReaderPlaywright,
		retry?: number
	) => Promise<void>;
	additionalParams?: string;
};

export type RunTestType = {
	page: Page;
	retry: number;
	screenReader: ScreenReaderPlaywright;
};
