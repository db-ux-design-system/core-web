import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';

// axe-core rule checks are engine-driven and effectively browser-independent, so
// running them across every project is redundant. We keep chromium, firefox,
// webkit and mobile_chrome for engine/viewport coverage but drop the two projects
// that add cost without catching axe-core-specific issues:
//   - chromium-highContrast: forced-colors is a visual concern, covered by the
//     visual/aria snapshot suites, not by axe-core rules.
//   - mobile_safari: mobile_chrome already covers the mobile viewport for axe-core.
const EXCLUDED_AXE_CORE_PROJECTS = new Set([
	'chromium-highContrast',
	'mobile_safari'
]);

const axeCoreConfig: PlaywrightTestConfig = {
	...config,
	projects: config.projects?.filter(
		(project) => !EXCLUDED_AXE_CORE_PROJECTS.has(project.name ?? '')
	),
	testMatch: '*-axe-core.spec.ts'
};

export default axeCoreConfig;
