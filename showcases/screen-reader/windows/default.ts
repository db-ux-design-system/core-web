/* eslint-disable import/no-anonymous-default-export */

import { windowsRecord } from '@guidepup/guidepup';
import { expect } from '@playwright/test';

export const generateSnapshot = async (nvda: any, shiftFirst?: boolean) => {
	if (!nvda) return;

	const phraseLog: string[] = await nvda.spokenPhraseLog();
	if (shiftFirst) {
		phraseLog.shift();
	}

	expect(JSON.stringify(phraseLog)).toMatchSnapshot();
};

/**
 *
 * @param test
 * @param title
 * @param url
 * @param testFn https://www.guidepup.dev/docs/api/class-nvda
 * @param postTestFn https://www.guidepup.dev/docs/api/class-nvda
 * @param additionalParams
 */
export const testDefault = (
	test: any,
	title: string,
	url: string,
	testFn: (nvda: any) => Promise<void>,
	postTestFn: (nvda: any) => Promise<void> = async (nvda: any) =>
		generateSnapshot(nvda),
	additionalParams = '&color=neutral-bg-lvl-1&density=regular'
) => {
	test(title, async ({ page, nvda }) => {
		await page.goto(`${url}${additionalParams}`, {
			waitUntil: 'networkidle'
		});
		await page.waitForTimeout(500);

		let recorder: (() => void) | undefined;

		try {
			if (process.env.CI) {
				recorder = windowsRecord(
					`./test-results/${title}-${Date.now()}.mp4`
				);
			}

			await nvda.navigateToWebContent();
			await testFn(nvda);
			await postTestFn(nvda);
		} catch (error) {
			console.error(error);
		} finally {
			await nvda.stop();
			recorder?.();
		}
	});
};

export default { testDefault, generateSnapshot };
