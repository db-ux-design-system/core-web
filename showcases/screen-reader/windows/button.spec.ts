import { nvdaTest as test } from '@guidepup/playwright';
import { expect } from '@playwright/experimental-ct-react';
import { windowsRecord } from '@guidepup/guidepup';

const title = 'shoudnt have icon in screen reader';

test.describe('DBButton', () => {
	test(title, async ({ page, nvda }) => {
		// Navigate to Guidepup GitHub page
		await page.goto(
			`./#/02/button?density=regular&color=neutral-bg-lvl-1&page=content`,
			{
				waitUntil: 'networkidle'
			}
		);
		await page.waitForTimeout(500);

		let recorder: (() => void) | undefined;
		let phraseLog: string[] | undefined;

		try {
			if (process.env.CI) {
				recorder = windowsRecord(
					`./test-results/${title}-${Date.now()}.mp4`
				);
			}

			await nvda.navigateToWebContent();
			await nvda.perform(nvda.keyboardCommands.sayAll);
			phraseLog = await nvda.spokenPhraseLog();
		} catch (error) {
			console.error(error);
		} finally {
			await nvda.stop();
			recorder?.();
			expect(JSON.stringify(phraseLog)).toMatchSnapshot();
		}
	});
});
