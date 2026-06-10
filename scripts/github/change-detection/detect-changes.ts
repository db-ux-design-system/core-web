/**
 * Detects which parts of the monorepo have changed compared to the base branch.
 * Outputs JSON with boolean flags for each category.
 *
 * Used by the init workflow (00-init.yml) to enable path-based job skipping.
 *
 * Categories:
 * - docs-only: Only non-code files changed (no builds or tests needed)
 * - foundations: packages/foundations changed
 * - components: packages/components changed (non-example, non-figma files)
 * - storybook: packages/components examples or storybook config changed
 * - patternhub: docs/ or patternhub-relevant content changed
 * - output: output/ directory changed
 * - showcases: showcases/ directory changed
 * - aria: __snapshots__ aria-snapshot.yaml files changed (gates screen-reader tests)
 * - vite-plugin: packages/vite-plugin changed
 * - figma: figma-code-connect/ or packages/components/ ** /figma/ ** changed
 * - postcss-plugin: packages/postcss-plugin changed (lint only)
 * - eslint-plugin: packages/eslint-plugin changed (lint only)
 * - stylelint: packages/stylelint changed (lint only)
 * - migration: packages/migration changed
 * - root-config: Root configuration files changed (affects everything)
 * - needs-full-pipeline: True when changes could affect anything
 */

import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export type ChangeCategories = {
	'docs-only': boolean;
	foundations: boolean;
	components: boolean;
	storybook: boolean;
	patternhub: boolean;
	output: boolean;
	showcases: boolean;
	aria: boolean;
	'vite-plugin': boolean;
	figma: boolean;
	'postcss-plugin': boolean;
	'eslint-plugin': boolean;
	stylelint: boolean;
	migration: boolean;
	'root-config': boolean;
	'needs-full-pipeline': boolean;
};

export function getChangedFiles(baseBranch: string): string[] {
	try {
		const output = execSync(`git diff ${baseBranch} --name-only`, {
			encoding: 'utf8'
		});

		return output.split('\n').filter(Boolean);
	} catch {
		// If git diff fails (e.g., no base branch), assume full pipeline needed
		console.error(
			'Warning: Could not determine changed files, running full pipeline'
		);

		return ['__unknown__'];
	}
}

export function isDocsOnlyFile(file: string): boolean {
	const docsOnlyPatterns = [
		/^\.changeset\//,
		// Non-workflow, non-action .github files (templates, CODEOWNERS, etc.).
		// .github/workflows/ and .github/actions/ are executable CI and handled
		// by isRootConfig (which is checked first in categorizeFile).
		/^\.github\/(?!workflows\/|actions\/)/,
		/^\.amazonq\//,
		/^\.claude\//,
		/^\.kiro\//,
		/^[^/]*\.md$/,
		/^LICENSE/,
		/^\.editorconfig$/,
		/^\.gitattributes$/,
		/^\.gitignore$/
	];

	return docsOnlyPatterns.some((pattern) => pattern.test(file));
}

export function isRootConfig(file: string): boolean {
	const rootConfigPatterns = [
		/^package\.json$/,
		/^pnpm-lock\.yaml$/,
		/^pnpm-workspace\.yaml$/,
		/^tsconfig.*\.json$/,
		/^\.nvmrc$/,
		/^\.env/,
		/^\.config\//,
		/^\.github\/workflows\//,
		// Custom GitHub Actions are executable workflow dependencies (e.g.
		// playwright-cache, auto-commit) consumed by the build/test jobs.
		/^\.github\/actions\//,
		// Browser target config: copied into showcases (e.g. next-showcase
		// setup:browserslist) and alters generated browser-targeted output.
		/^\.browserslistrc$/
	];

	return rootConfigPatterns.some((pattern) => pattern.test(file));
}

/**
 * Categorizes a file under `__snapshots__/`. Snapshots are organized as
 * `__snapshots__/<name>/<component|showcase|patternhub>/...` (plus
 * `__snapshots__/foundations/<browser>/...`), so the relevant test suite is
 * derived from the path segment instead of always selecting showcases.
 * Additionally marks aria when an aria-snapshot changed (which gates the
 * costly screen-reader tests).
 */
export function categorizeSnapshotFile(
	file: string,
	categories: ChangeCategories
): void {
	if (file.includes('/component/')) {
		categories.components = true;
	} else if (file.includes('/patternhub/')) {
		categories.patternhub = true;
	} else if (file.startsWith('__snapshots__/foundations/')) {
		categories.foundations = true;
	} else if (file.includes('/showcase/')) {
		categories.showcases = true;
	} else {
		// Unknown snapshot layout — be safe and run the showcase suites.
		categories.showcases = true;
	}

	if (file.endsWith('-aria-snapshot.yaml')) {
		categories.aria = true;
	}
}

export function categorizeFile(
	file: string,
	categories: ChangeCategories
): boolean {
	// Check root config (triggers full pipeline)
	if (isRootConfig(file)) {
		categories['root-config'] = true;
		categories['needs-full-pipeline'] = true;

		return true;
	}

	// Docs/ directory → patternhub content (not docs-only, it gets deployed)
	if (file.startsWith('docs/')) {
		categories.patternhub = true;

		return true;
	}

	// Check if it's a docs-only file (no impact on builds)
	if (isDocsOnlyFile(file)) {
		return false; // Not a code change
	}

	// Packages/foundations
	if (file.startsWith('packages/foundations/')) {
		categories.foundations = true;

		return true;
	}

	// Packages/components — distinguish examples (storybook) and figma
	// connect files from other component source files
	if (file.startsWith('packages/components/')) {
		if (file.includes('/figma/')) {
			categories.figma = true;
		} else if (file.includes('/examples/')) {
			// Examples generate Storybooks but are also imported by the
			// component showcase modules and rendered in Patternhub, so their
			// build + E2E suites must run to catch behavioral/visual/a11y
			// regressions in the rendered examples.
			categories.storybook = true;
			categories.showcases = true;
			categories.patternhub = true;
		} else {
			categories.components = true;
		}

		return true;
	}

	// Output/
	if (file.startsWith('output/')) {
		categories.output = true;

		return true;
	}

	// Showcases/
	if (file.startsWith('showcases/')) {
		categories.showcases = true;

		return true;
	}

	// __snapshots__/ (aria/visual) — need showcase builds + tests
	if (file.startsWith('__snapshots__/')) {
		categorizeSnapshotFile(file, categories);

		return true;
	}

	// Packages/vite-plugin
	if (file.startsWith('packages/vite-plugin/')) {
		categories['vite-plugin'] = true;

		return true;
	}

	// Figma-code-connect/ (lives at repo root, not under packages/)
	if (file.startsWith('figma-code-connect/')) {
		categories.figma = true;

		return true;
	}

	// Packages/postcss-plugin
	if (file.startsWith('packages/postcss-plugin/')) {
		categories['postcss-plugin'] = true;

		return true;
	}

	// Packages/eslint-plugin
	if (file.startsWith('packages/eslint-plugin/')) {
		categories['eslint-plugin'] = true;

		return true;
	}

	// Packages/stylelint
	if (file.startsWith('packages/stylelint/')) {
		categories.stylelint = true;

		return true;
	}

	// Packages/migration
	if (file.startsWith('packages/migration/')) {
		categories.migration = true;

		return true;
	}

	// Change detection scripts affect showcase/test behavior
	// (These scripts determine which tests run, so changes should trigger the test suite to verify)
	if (file.startsWith('scripts/github/change-detection/')) {
		categories.showcases = true;

		return true;
	}

	// Other scripts could affect build/CI behavior
	if (file.startsWith('scripts/')) {
		categories['needs-full-pipeline'] = true;

		return true;
	}

	// Unknown path — safer to run full pipeline
	categories['needs-full-pipeline'] = true;

	return true;
}

export function categorizeChanges(files: string[]): ChangeCategories {
	// If we couldn't determine files, run everything
	if (files.includes('__unknown__')) {
		return {
			'docs-only': false,
			foundations: true,
			components: true,
			storybook: true,
			patternhub: true,
			output: true,
			showcases: true,
			aria: true,
			'vite-plugin': true,
			figma: true,
			'postcss-plugin': true,
			'eslint-plugin': true,
			stylelint: true,
			migration: true,
			'root-config': true,
			'needs-full-pipeline': true
		};
	}

	const categories: ChangeCategories = {
		'docs-only': false,
		foundations: false,
		components: false,
		storybook: false,
		patternhub: false,
		output: false,
		showcases: false,
		aria: false,
		'vite-plugin': false,
		figma: false,
		'postcss-plugin': false,
		'eslint-plugin': false,
		stylelint: false,
		migration: false,
		'root-config': false,
		'needs-full-pipeline': false
	};

	let hasCodeChanges = false;

	for (const file of files) {
		const isCode = categorizeFile(file, categories);
		if (isCode) {
			hasCodeChanges = true;
		}
	}

	// If no code changes detected, it's docs-only
	if (!hasCodeChanges) {
		categories['docs-only'] = true;
	}

	// === Cascading logic ===

	// Foundations changes affect components, showcases, patternhub
	if (categories.foundations) {
		categories.components = true;
		categories.patternhub = true;
	}

	// Component (non-example) changes affect showcases, outputs, and storybook
	if (categories.components) {
		categories.showcases = true;
		categories.output = true;
		categories.storybook = true;
		categories.patternhub = true;
	}

	// Output changes affect vite-plugin tests
	if (categories.output) {
		categories['vite-plugin'] = true;
	}

	return categories;
}

// --- CLI execution ---
// When run directly (not imported), detect changes and output JSON

const isCliExecution =
	process.argv[1] === fileURLToPath(import.meta.url) ||
	process.argv[1]?.replaceAll('\\', '/').includes('detect-changes');

if (isCliExecution) {
	const eventName = process.env.GITHUB_EVENT_NAME ?? '';
	const ref = process.env.GITHUB_REF ?? '';
	// For pull_request events GitHub exposes the target branch via
	// GITHUB_BASE_REF (the workflow maps github.base_ref to it).
	const baseRef = process.env.GITHUB_BASE_REF ?? '';

	let categories: ChangeCategories;

	if (eventName === 'release' || eventName === 'workflow_dispatch') {
		// Release checks out the tag (origin/main...HEAD can be empty) and a
		// workflow_dispatch from an unchanged main has the same problem. Both
		// events are intended to run the full pipeline, so bypass path
		// detection and force every category on.
		categories = categorizeChanges(['__unknown__']);
	} else {
		let baseBranch: string;
		if (eventName === 'push' && ref === 'refs/heads/main') {
			baseBranch = 'HEAD~1';
		} else if (eventName === 'pull_request' && baseRef) {
			// Diff against the PR's actual base branch (which may not be main).
			baseBranch = `origin/${baseRef}...HEAD`;
		} else {
			// Merge_group and any other event: validate against main.
			baseBranch = 'origin/main...HEAD';
		}

		const changedFiles = getChangedFiles(baseBranch);
		categories = categorizeChanges(changedFiles);
	}

	// Output as JSON for the workflow to parse
	console.log(JSON.stringify(categories));
}
