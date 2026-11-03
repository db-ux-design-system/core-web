import { AxeBuilder } from '@axe-core/playwright';
import {
	expect,
	type FullProject,
	type Locator,
	type Page,
	test
} from '@playwright/test';
import type { Checker } from 'accessibility-checker-engine';
import { type Issue } from 'accessibility-checker-engine/v4/api/IRule';
import { createRequire } from 'node:module';
import { type PageAssertionsToHaveScreenshotOptions } from 'playwright/types/test';
import { lvl1 } from './fixtures/variants.ts';
import { setScrollViewport } from './fixtures/viewport.ts';

const density = 'regular';

export type SkipType = {
	angular?: boolean;
	stencil?: boolean;
	project?: (project: FullProject) => boolean;
};

export type DefaultTestType = {
	path: string;
	fixedHeight?: number | ((project: FullProject) => number | undefined);
	skip?: SkipType;
};

export type DefaultSnapshotTestType = {
	preScreenShot?: (page: Page, project: FullProject) => Promise<void>;
	ratio?: string;
} & DefaultTestType;

export type AxeCoreTestType = {
	axeDisableRules?: string[];
	/**
	 CSS selector(s) excluded from the scan. Use this to drop a single known
	 element from coverage instead of disabling a rule for the whole page, so
	 every other example on the page keeps enforcing that rule.
	 */
	axeExclude?: string | string[];
	skipAxe?: boolean;
	preAxe?: (page: Page) => Promise<void>;
	color?: string;
	density?: 'functional' | 'regular' | 'expressive';
} & DefaultTestType;

export type A11yCheckerTestType = {
	aCheckerDisableRules?: string[];
	skipChecker?: boolean;
	preChecker?: (page: Page) => Promise<void>;
} & DefaultTestType;

export type InteractionTestType = {
	/**
	 Test title shown in the report.
	 */
	title: string;
	/**
	 Optional example name to target a single example on the showcase page
	 (matches the `page=` query the showcase uses to filter examples).
	 The value is lower-cased and spaces are replaced with `+`, mirroring
	 `LinkWrapperShowcase.getPage()`.
	 */
	example?: string;
	/**
	 The interaction to run. `content` is the `#main-content` locator, already
	 scoped to the rendered example, so tests do not have to repeat the scope.
	 */
	run: (args: {
		page: Page;
		content: Locator;
		project: FullProject;
	}) => Promise<void>;
} & DefaultTestType;

/**
 Resolves a form control by role when the `data-testid` may sit on either the
 control itself or a wrapping ancestor, depending on the framework output.

 `data-*` attributes forward to the element carrying the component `_ref` - the
 native control (`<input>`, `<select>`, `<textarea>`) in the React, Angular and
 Stencil outputs. Vue's single-root attribute fallthrough instead lands them on
 the component's wrapping root element, so the control is a descendant there.

 `scope.getByRole(role)` matches the descendant control (Vue); the
 `scope.and(page.getByRole(role))` branch matches `scope` itself when it is the
 control (React/Angular/Stencil). Exactly one branch resolves in each output, so
 the returned locator is unambiguous across every framework showcase.
 */
export const getControlByRole = (
	page: Page,
	scope: Locator,
	role: Parameters<Locator['getByRole']>[0]
): Locator => scope.getByRole(role).or(scope.and(page.getByRole(role)));

/**
 CSS-selector counterpart to `getControlByRole`, for controls matched by an
 attribute selector (e.g. `input[type="file"]`) rather than an ARIA role.
 Resolves the control whether the `data-testid` sits on it (React/Angular/
 Stencil) or on a wrapping ancestor (Vue). See `getControlByRole` for the full
 explanation of the per-framework attribute-forwarding difference.
 */
export const getControlBySelector = (
	page: Page,
	scope: Locator,
	selector: string
): Locator => scope.locator(selector).or(scope.and(page.locator(selector)));

export const isStencil = (showcase?: string): boolean =>
	Boolean(showcase?.startsWith('stencil'));
export const isAngular = (showcase?: string): boolean =>
	Boolean(showcase?.startsWith('angular'));
export const isVue = (showcase: string): boolean => showcase.startsWith('vue');
export const isReact = (showcase?: string): boolean =>
	Boolean(showcase?.startsWith('react'));

/*
 * Coloring modes mirror the react-showcase "Coloring" select (see
 * `showcases/settings.ts` / `use-query`): the legacy color system, the adaptive
 * system, and both loaded together. Only the react-showcase wires the `coloring`
 * URL param to a stylesheet swap, so the adaptive modes only produce distinct
 * screenshots there - the other framework showcases render legacy regardless.
 */
export const COLORING_MODES = [
	'legacy',
	'legacy-adaptive',
	'adaptive'
] as const;
export type ColoringMode = (typeof COLORING_MODES)[number];

export const hasWebComponentSyntax = (showcase?: string): boolean =>
	isAngular(showcase) || isStencil(showcase);

export const waitForDBShell = async (page: Page) => {
	const dbShell = page.locator('.db-shell:not([data-test-id])');
	// We wait till db-shell fully loaded
	await dbShell.evaluate((element) => {
		element.style.transition = 'none';
	});
	await expect(dbShell).not.toHaveAttribute('data-fonts-loaded', 'false');
	await expect(dbShell).toHaveCSS('opacity', '1');
};

/**
 Normalizes an example name into the `page=` query value the showcase uses to
 filter to a single example. Mirrors `LinkWrapperShowcase.getPage()`:
 lower-cased with spaces replaced by `+`.
 */
export const getExampleParameter = (example: string): string =>
	example.replaceAll(' ', '+').toLowerCase();

const gotoPage = async (
	page: Page,
	path: string,
	color: string,
	fixedHeight?: number,
	otherDensity?: 'functional' | 'regular' | 'expressive',
	example?: string,
	coloring?: ColoringMode
) => {
	const pageParameter = example
		? `&page=${getExampleParameter(example)}`
		: '';
	const coloringParameter = coloring ? `&coloring=${coloring}` : '';
	await page.goto(
		`./#/${path}?density=${otherDensity ?? density}&color=${color}${coloringParameter}${pageParameter}`,
		{
			waitUntil: 'domcontentloaded'
		}
	);
	// eslint-disable-next-line unicorn/isolated-functions -- document is available in browser context
	await page.evaluate(async () => document.fonts.ready);

	if (!example) {
		await waitForDBShell(page);
		await setScrollViewport(page, fixedHeight)();
	}
};

const shouldSkip = (project: FullProject, skip?: SkipType): boolean => {
	if (skip) {
		if (skip.project?.(project)) {
			return true;
		}

		const { showcase } = process.env;
		if (skip.angular && isAngular('angular')) {
			return true;
		}

		if (skip.stencil && isStencil(showcase)) {
			return true;
		}
	}

	return false;
};

export const getDefaultScreenshotTest = ({
	path,
	fixedHeight,
	preScreenShot,
	skip,
	ratio
}: DefaultSnapshotTestType) => {
	/*
	 * Every framework showcase renders the coloring modes (each wires the
	 * `coloring` URL param to a stylesheet swap). The visual baselines are
	 * framework-agnostic (shared across react/vue/angular/stencil), so all
	 * showcases must produce the same rendering per mode.
	 *
	 * There are only TWO baseline images: `legacy` and `adaptive`. The
	 * `legacy-adaptive` mode (both bundles loaded) MUST render identically to
	 * pure `adaptive` - a `data-adaptive-coloring` page looks the same whether
	 * or not the legacy bundle is also loaded, UNLESS a legacy color leaks
	 * through. Instead of its own baseline, `legacy-adaptive` is compared
	 * against the SAME `adaptive.png` within the adaptive test (a second
	 * `toHaveScreenshot('adaptive.png')` call). So regeneration only produces
	 * the `adaptive` image, and the second assertion fails if any old color
	 * leaks into the combined bundle.
	 */
	const buildConfig = (
		project: FullProject
	): PageAssertionsToHaveScreenshotOptions => {
		const diffPixel = process.env.diff;
		const maxDiffPixelRatio = process.env.ratio ?? ratio;
		const isWebkit =
			project.name === 'webkit' || project.name === 'mobile_safari';

		const config: PageAssertionsToHaveScreenshotOptions = {};

		if (maxDiffPixelRatio ?? diffPixel) {
			if (maxDiffPixelRatio) {
				config.maxDiffPixelRatio = Number(maxDiffPixelRatio);
			}

			if (diffPixel) {
				config.maxDiffPixels = Number(diffPixel);
			}
		} else if (isWebkit) {
			config.maxDiffPixelRatio = 0.0123;
		}

		return config;
	};

	const gotoAndPrepare = async (
		page: Page,
		project: FullProject,
		coloring: ColoringMode,
		config: PageAssertionsToHaveScreenshotOptions
	) => {
		const resolvedFixedHeight =
			typeof fixedHeight === 'function'
				? fixedHeight(project)
				: fixedHeight;

		await gotoPage(
			page,
			path,
			lvl1,
			resolvedFixedHeight,
			undefined,
			undefined,
			coloring
		);

		config.mask = [
			page.locator('.db-control-panel-desktop').first(),
			page.locator('.db-control-panel-mobile').first()
		];

		if (preScreenShot) {
			await preScreenShot(page, project);
		}
	};

	test('should match screenshot - legacy', async ({ page }, { project }) => {
		if (shouldSkip(project, skip)) {
			test.skip();
		}

		const config = buildConfig(project);
		await gotoAndPrepare(page, project, 'legacy', config);
		await expect(page).toHaveScreenshot('legacy.png', config);
	});

	test('should match screenshot - adaptive', async ({ page }, {
		project
	}) => {
		if (shouldSkip(project, skip)) {
			test.skip();
		}

		const config = buildConfig(project);

		// Legacy + adaptive bundle loaded together: must match the pure adaptive
		// baseline exactly, otherwise a legacy color is leaking through. Asserted
		// FIRST so that on `--update-snapshots` the pure-adaptive render below is
		// the final write and therefore the source of truth for `adaptive.png`.
		await gotoAndPrepare(page, project, 'legacy-adaptive', config);
		await expect(page).toHaveScreenshot('adaptive.png', config);

		// Pure adaptive: the source-of-truth baseline (written last on update).
		await gotoAndPrepare(page, project, 'adaptive', config);
		await expect(page).toHaveScreenshot('adaptive.png', config);
	});
};

const shouldSkipA11yTest = (project: FullProject): boolean =>
	project.name === 'firefox' ||
	project.name === 'webkit' ||
	project.name.startsWith('mobile');

export const runAxeCoreTest = ({
	path,
	fixedHeight,
	axeDisableRules,
	axeExclude,
	skipAxe,
	preAxe,
	color = lvl1,
	density = 'regular',
	skip
}: AxeCoreTestType) => {
	test(`should not have any A11y issues for density ${density} and color ${color}`, async ({
		page
	}, { project }) => {
		const isLevelOne = color.endsWith('-1');
		// We don't need to check color contrast for every project (just for chrome)
		if (
			skipAxe ||
			shouldSkip(project, skip) ||
			(!isLevelOne && shouldSkipA11yTest(project))
		) {
			test.skip();
		}

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, color, fixedHeight, density);

		// This is a workaround for axe for browsers using forcedColors
		// see https://github.com/dequelabs/axe-core-npm/issues/1067
		/* eslint-disable unicorn/isolated-functions -- document is available in browser context */
		await page.evaluate(($project) => {
			if ($project.use.contextOptions?.forcedColors !== 'active') {
				return;
			}

			const style = document.createElement('style');
			document.head.append(style);
			const textColor =
				$project.use.colorScheme === 'dark' ? '#fff' : '#000';
			style.textContent = `* {-webkit-text-stroke-color:${textColor}!important;-webkit-text-fill-color:${textColor}!important;}`;
		}, project);
		/* eslint-enable unicorn/isolated-functions */

		if (preAxe) {
			await preAxe(page);
		}

		const axeBuilder = new AxeBuilder({ page })
			.include('#main-content')
			.disableRules(axeDisableRules ?? []);
		if (axeExclude) {
			for (const selector of Array.isArray(axeExclude)
				? axeExclude
				: [axeExclude]) {
				axeBuilder.exclude(selector);
			}
		}
		const accessibilityScanResults = await axeBuilder.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

export const runA11yCheckerTest = ({
	path,
	fixedHeight,
	aCheckerDisableRules,
	preChecker,
	skipChecker,
	skip
}: A11yCheckerTestType) => {
	test('test with accessibility checker', async ({ page }, { project }) => {
		if (
			skipChecker ||
			shouldSkip(project, skip) ||
			shouldSkipA11yTest(project)
		) {
			// Checking complete DOM in Firefox and Webkit takes very long, we skip this test
			// we don't need to check for mobile device - it just changes the viewport
			test.skip();
		}

		test.slow(); // Easy way to triple the default timeout

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, lvl1, fixedHeight);

		if (preChecker) {
			await preChecker(page);
		}

		let failures: any[] = [];
		try {
			// Inject the accessibility-checker engine from local node_modules
			const require = createRequire(import.meta.url);
			const enginePath = require.resolve('accessibility-checker-engine');
			await page.addScriptTag({ path: enginePath });

			/* eslint-disable unicorn/isolated-functions -- document is available in browser context */
			const results: Issue[] = await page.evaluate(async () => {
				const { ace } = globalThis as any;
				if (!ace?.Checker) {
					return [];
				}

				const checker: Checker = new ace.Checker();
				const report = await checker.check(document, [
					'IBM_Accessibility'
				]);
				return report.results ?? [];
			});
			/* eslint-enable unicorn/isolated-functions */

			failures = results.filter(
				(result: Issue) =>
					result.value.includes('VIOLATION') &&
					result.value.includes('FAIL') &&
					!aCheckerDisableRules?.includes(result.ruleId)
			);
		} catch (error) {
			console.error(error);
			failures.push(error);
		}

		expect(failures).toEqual([]);
	});
};

export const runAriaSnapshotTest = ({
	path,
	fixedHeight,
	preScreenShot,
	skip
}: DefaultSnapshotTestType) => {
	test('should have same aria-snapshot', async ({ page }, {
		project,
		title
	}) => {
		if (shouldSkip(project, skip)) {
			// There is an issue with Webkit and Stencil for new playwright version
			test.skip();
		}

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, lvl1, fixedHeight, density);

		if (preScreenShot) {
			await preScreenShot(page, project);
		}

		await page.waitForTimeout(1000); // We wait a little bit until everything loaded

		let snapshot = await page
			.locator('#main-content')
			.first()
			.ariaSnapshot();

		// Remove `/url` in snapshot because they differ in every showcase
		const lines = snapshot.split('\n');
		const includesUrl = '/url:';
		snapshot = lines
			.map((line) => {
				if (line.includes(includesUrl)) {
					return undefined;
				}

				if (line.includes('- link')) {
					line = line.replace(':', '');
				}

				if (line.includes(' [invalid]')) {
					// Some frameworks add additional [invalid]
					line = line.replace(' [invalid]', '');
				}

				return line;
			})
			.filter(Boolean)
			.join('\n');

		expect(snapshot).toMatchSnapshot(`${title}.yaml`);
	});
};

/**
 Runs a cross-framework interaction test against a showcase example.

 Replaces the component-mount interaction tests that previously lived in
 `packages/components/src/components/**\/*.spec.tsx` and only ran against the
 React and Vue outputs. By driving the running showcase app instead of a
 mounted component, the same assertions run against every framework showcase
 (react, vue, angular, stencil, next, nuxt).

 The `run` callback receives the `page` plus a `content` locator already
 scoped to `#main-content`, so tests interact with the rendered example the
 * same way a user would and assert on observable DOM instead of JS callbacks.
 */
export const runInteractionTest = ({
	title,
	path,
	example,
	fixedHeight,
	skip,
	run
}: InteractionTestType) => {
	test(title, async ({ page }, { project }) => {
		if (shouldSkip(project, skip)) {
			test.skip();
		}

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, lvl1, fixedHeight, density, example);

		// Scope to the requested example's container. Each LinkWrapperShowcase
		// tags its content with `data-example="<normalized name>"`, so the
		// locator stays unambiguous even on Stencil, which keeps non-matching
		// examples in the DOM (hidden) instead of removing them like React/Vue.
		const root = page.locator('.fullscreen-container').first();
		const content = example
			? root
					.locator(`[data-example="${getExampleParameter(example)}"]`)
					.first()
			: root;

		await run({ page, content, project });
	});
};
