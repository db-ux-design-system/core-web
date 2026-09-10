import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';

const interactionConfig: PlaywrightTestConfig = {
	...config,
	testMatch: '*-interaction.spec.ts'
};

export default interactionConfig;
