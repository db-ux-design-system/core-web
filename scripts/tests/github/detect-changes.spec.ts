import { describe, expect, test } from 'vitest';

import {
	categorizeChanges,
	isDocsOnlyFile,
	isRootConfig
} from '../../github/change-detection/detect-changes.js';

describe('detect-changes categorization logic', () => {
	describe('isDocsOnlyFile', () => {
		test.each([
			['README.md', true],
			['CONTRIBUTING.md', true],
			['.changeset/some-change.md', true],
			['.github/CODEOWNERS', true],
			['.github/PULL_REQUEST_TEMPLATE.md', true],
			['.amazonq/rules/instructions.md', true],
			['.claude/settings.json', true],
			['.kiro/specs/feature/tasks.md', true],
			['LICENSE', true],
			['.editorconfig', true],
			['.gitattributes', true],
			['.gitignore', true],
			// Not docs-only
			['.github/workflows/default.yml', false],
			['.github/actions/playwright-cache/action.yml', false],
			['.browserslistrc', false], // Now root-config (affects generated output)
			['packages/components/src/button.ts', false],
			['docs/index.md', false], // Docs/ is patternhub, not docs-only
			['scripts/build.ts', false],
			['nested/README.md', false] // Only root-level .md
		])('%s → %s', (file, expected) => {
			expect(isDocsOnlyFile(file)).toBe(expected);
		});
	});

	describe('isRootConfig', () => {
		test.each([
			['package.json', true],
			['pnpm-lock.yaml', true],
			['pnpm-workspace.yaml', true],
			['tsconfig.json', true],
			['tsconfig.base.json', true],
			['.nvmrc', true],
			['.env', true],
			['.env.template', true],
			['.config/cspell.config.ts', true],
			['.github/workflows/default.yml', true],
			['.github/actions/auto-commit/action.yml', true],
			['.browserslistrc', true],
			// Not root config
			['packages/components/package.json', false],
			['README.md', false],
			['scripts/build.ts', false]
		])('%s → %s', (file, expected) => {
			expect(isRootConfig(file)).toBe(expected);
		});
	});

	describe('categorizeChanges', () => {
		test('empty file list → docs-only', () => {
			const result = categorizeChanges([]);
			expect(result['docs-only']).toBe(true);
			expect(result['needs-full-pipeline']).toBe(false);
		});

		test('only .md files → docs-only', () => {
			const result = categorizeChanges([
				'README.md',
				'CONTRIBUTING.md',
				'CHANGELOG.md'
			]);
			expect(result['docs-only']).toBe(true);
			expect(result.foundations).toBe(false);
			expect(result.components).toBe(false);
		});

		test('only .changeset files → docs-only', () => {
			const result = categorizeChanges([
				'.changeset/my-feature.md',
				'.changeset/config.json'
			]);
			// .changeset/ prefix is matched by the docsOnly pattern regardless of file extension
			expect(result['docs-only']).toBe(true);
		});

		test('__unknown__ sentinel → full pipeline', () => {
			const result = categorizeChanges(['__unknown__']);
			expect(result['needs-full-pipeline']).toBe(true);
			expect(result.foundations).toBe(true);
			expect(result.components).toBe(true);
			expect(result.showcases).toBe(true);
			expect(result['docs-only']).toBe(false);
		});

		test('foundations change cascades to components and patternhub', () => {
			const result = categorizeChanges([
				'packages/foundations/scss/_variables.scss'
			]);
			expect(result.foundations).toBe(true);
			expect(result.components).toBe(true);
			expect(result.patternhub).toBe(true);
			// Components cascade further
			expect(result.showcases).toBe(true);
			expect(result.output).toBe(true);
			expect(result.storybook).toBe(true);
			expect(result['docs-only']).toBe(false);
		});

		test('component non-example change cascades to showcases, output, storybook, patternhub', () => {
			const result = categorizeChanges([
				'packages/components/src/components/button/model.ts'
			]);
			expect(result.components).toBe(true);
			expect(result.showcases).toBe(true);
			expect(result.output).toBe(true);
			expect(result.storybook).toBe(true);
			expect(result.patternhub).toBe(true);
			expect(result['vite-plugin']).toBe(true); // Via output cascade
		});

		test('component example file → storybook + showcases + patternhub (not components)', () => {
			const result = categorizeChanges([
				'packages/components/src/components/button/examples/default.tsx'
			]);
			expect(result.storybook).toBe(true);
			// Examples are imported by showcase modules and rendered in
			// Patternhub, so their suites must run too.
			expect(result.showcases).toBe(true);
			expect(result.patternhub).toBe(true);
			expect(result.components).toBe(false);
			expect(result['docs-only']).toBe(false);
		});

		test('output/ change cascades to vite-plugin', () => {
			const result = categorizeChanges(['output/react/src/index.ts']);
			expect(result.output).toBe(true);
			expect(result['vite-plugin']).toBe(true);
			expect(result.components).toBe(false);
		});

		test('showcases/ change is isolated', () => {
			const result = categorizeChanges([
				'showcases/react-showcase/src/App.tsx'
			]);
			expect(result.showcases).toBe(true);
			expect(result.components).toBe(false);
			expect(result.output).toBe(false);
		});

		test('__snapshots__/ component change maps to components', () => {
			const result = categorizeChanges([
				'__snapshots__/button/component/button-screenshot.png'
			]);
			expect(result.components).toBe(true);
			// Components cascade to showcases too
			expect(result.showcases).toBe(true);
		});

		test('__snapshots__/ showcase change maps to showcases (not components)', () => {
			const result = categorizeChanges([
				'__snapshots__/button/showcase/button-screenshot.png'
			]);
			expect(result.showcases).toBe(true);
			expect(result.components).toBe(false);
		});

		test('__snapshots__/ patternhub change maps to patternhub', () => {
			const result = categorizeChanges([
				'__snapshots__/button/patternhub/button-screenshot.png'
			]);
			expect(result.patternhub).toBe(true);
		});

		test('__snapshots__/foundations change maps to foundations', () => {
			const result = categorizeChanges([
				'__snapshots__/foundations/chromium/colors-screenshot.png'
			]);
			expect(result.foundations).toBe(true);
		});

		test('__snapshots__/ unknown layout falls back to showcases', () => {
			const result = categorizeChanges([
				'__snapshots__/button-aria-snapshot.yaml'
			]);
			expect(result.showcases).toBe(true);
		});

		test('__snapshots__/ component aria-snapshot.yaml sets aria flag', () => {
			const result = categorizeChanges([
				'__snapshots__/button/component/button-aria-snapshot.yaml'
			]);
			expect(result.aria).toBe(true);
			expect(result.components).toBe(true);
		});

		test('__snapshots__/ screenshot.png does not set aria', () => {
			const result = categorizeChanges([
				'__snapshots__/button/showcase/button-screenshot.png'
			]);
			expect(result.aria).toBe(false);
			expect(result.showcases).toBe(true);
		});

		test('other __snapshots__/ files do not set aria', () => {
			const result = categorizeChanges([
				'__snapshots__/button/showcase/some-other-file.txt'
			]);
			expect(result.aria).toBe(false);
			expect(result.showcases).toBe(true);
		});

		test('vite-plugin change is isolated', () => {
			const result = categorizeChanges([
				'packages/vite-plugin/src/index.ts'
			]);
			expect(result['vite-plugin']).toBe(true);
			expect(result.components).toBe(false);
			expect(result['needs-full-pipeline']).toBe(false);
		});

		test('figma-code-connect change is isolated', () => {
			const result = categorizeChanges([
				'figma-code-connect/react-figma/parse-utils.ts'
			]);
			expect(result.figma).toBe(true);
			expect(result.components).toBe(false);
		});

		test('component figma connect file → figma (not components)', () => {
			const result = categorizeChanges([
				'packages/components/src/components/button/figma/button.figma.ts'
			]);
			expect(result.figma).toBe(true);
			expect(result.components).toBe(false);
			expect(result.showcases).toBe(false);
			expect(result['docs-only']).toBe(false);
		});

		test('postcss-plugin, eslint-plugin, stylelint → lint-only (no cascading)', () => {
			const result = categorizeChanges([
				'packages/postcss-plugin/src/index.ts'
			]);
			expect(result['postcss-plugin']).toBe(true);
			expect(result['needs-full-pipeline']).toBe(false);
			expect(result.components).toBe(false);

			const result2 = categorizeChanges([
				'packages/eslint-plugin/src/rules/my-rule.ts'
			]);
			expect(result2['eslint-plugin']).toBe(true);
			expect(result2['needs-full-pipeline']).toBe(false);

			const result3 = categorizeChanges([
				'packages/stylelint/src/rules/my-rule.ts'
			]);
			expect(result3.stylelint).toBe(true);
			expect(result3['needs-full-pipeline']).toBe(false);
		});

		test('migration package is isolated', () => {
			const result = categorizeChanges([
				'packages/migration/src/index.ts'
			]);
			expect(result.migration).toBe(true);
			expect(result['needs-full-pipeline']).toBe(false);
		});

		test('docs/ directory maps to patternhub (not docs-only)', () => {
			const result = categorizeChanges(['docs/getting-started.md']);
			expect(result.patternhub).toBe(true);
			expect(result['docs-only']).toBe(false);
		});

		test('scripts/github/change-detection/ maps to showcases', () => {
			const result = categorizeChanges([
				'scripts/github/change-detection/detect-changes.ts'
			]);
			expect(result.showcases).toBe(true);
			expect(result['needs-full-pipeline']).toBe(false);
		});

		test('other scripts/ trigger full pipeline', () => {
			const result = categorizeChanges([
				'scripts/github/get-playwright-version.ts'
			]);
			expect(result['needs-full-pipeline']).toBe(true);
		});

		test('root package.json triggers full pipeline', () => {
			const result = categorizeChanges(['package.json']);
			expect(result['root-config']).toBe(true);
			expect(result['needs-full-pipeline']).toBe(true);
		});

		test('.github/workflows/ changes trigger full pipeline', () => {
			const result = categorizeChanges(['.github/workflows/default.yml']);
			expect(result['root-config']).toBe(true);
			expect(result['needs-full-pipeline']).toBe(true);
		});

		test('.github/ non-workflow files are docs-only', () => {
			const result = categorizeChanges(['.github/CODEOWNERS']);
			expect(result['docs-only']).toBe(true);
			expect(result['needs-full-pipeline']).toBe(false);
		});

		test('.github/actions/ changes trigger full pipeline', () => {
			const result = categorizeChanges([
				'.github/actions/playwright-cache/action.yml'
			]);
			expect(result['root-config']).toBe(true);
			expect(result['needs-full-pipeline']).toBe(true);
			expect(result['docs-only']).toBe(false);
		});

		test('.browserslistrc change triggers full pipeline', () => {
			const result = categorizeChanges(['.browserslistrc']);
			expect(result['root-config']).toBe(true);
			expect(result['needs-full-pipeline']).toBe(true);
			expect(result['docs-only']).toBe(false);
		});

		test('unknown file path triggers full pipeline', () => {
			const result = categorizeChanges(['some-unknown-folder/file.ts']);
			expect(result['needs-full-pipeline']).toBe(true);
			expect(result['docs-only']).toBe(false);
		});

		test('mixed docs + code change is not docs-only', () => {
			const result = categorizeChanges([
				'README.md',
				'packages/foundations/scss/_variables.scss'
			]);
			expect(result['docs-only']).toBe(false);
			expect(result.foundations).toBe(true);
		});
	});
});
