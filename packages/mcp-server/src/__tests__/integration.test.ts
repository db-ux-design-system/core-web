import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('node:fs', () => ({ existsSync: vi.fn() }));
vi.mock('node:fs/promises', () => ({ readFile: vi.fn() }));

const { existsSync } = await import('node:fs');
const { readFile } = await import('node:fs/promises');
const {
	resetManifestCache,
	handleListComponents,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleListDesignTokenCategories,
	handleGetDesignTokens,
	handleListIcons,
	handleGetExampleCode,
	handleDocsSearch,
	handleScaffoldPagePrompt,
	handleReviewUiCodePrompt,
	handleMigrateComponentPrompt,
	handleAuditAccessibilityPrompt
} = await import('../index.js');

const FAKE_PROPS = 'export interface FakeProps { label: string; }';
const FAKE_EXAMPLE_CODE = '<DBButton>Click</DBButton>';

function makeManifest(components: Record<string, unknown> = {}, icons: string[] = []) {
	return JSON.stringify({ icons, components });
}

function assertUserMessage(result: any) {
	expect(result.messages).toHaveLength(1);
	expect(result.messages[0].role).toBe('user');
	return result.messages[0].content.text as string;
}

// ---------------------------------------------------------------------------
// Shared setup: reset manifest cache + mocks before each test
// ---------------------------------------------------------------------------
beforeEach(() => {
	vi.resetAllMocks();
	resetManifestCache();
	// manifest.json must appear to exist so getManifest() proceeds
	vi.mocked(existsSync).mockReturnValue(true);
});

// ---------------------------------------------------------------------------
// list_components
// ---------------------------------------------------------------------------
describe('handleListComponents', () => {
	it('returns component names from the manifest', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({ button: {}, input: {} }) as any);

		const result = await handleListComponents();

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('button');
		expect(result.content[0].text).toContain('input');
	});

	it('returns an empty array when manifest has no components', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest() as any);

		const result = await handleListComponents();

		expect(result.content[0].text).toBe('[]');
	});
});

// ---------------------------------------------------------------------------
// get_component_details
// ---------------------------------------------------------------------------
describe('handleGetComponentDetails', () => {
	it('returns example names from the manifest', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({
			button: { props: null, examples: ['Variant', 'Show Icon Leading'], exampleCode: {} }
		}) as any);

		const result = await handleGetComponentDetails({ componentName: 'button' });

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('Variant');
		expect(result.content[0].text).toContain('Show Icon Leading');
	});

	it('returns "No examples found." when examples array is empty', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({
			button: { props: null, examples: [], exampleCode: {} }
		}) as any);

		const result = await handleGetComponentDetails({ componentName: 'button' });

		expect(result.content[0].text).toBe('No examples found.');
	});

	it('returns an error for unknown component', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest() as any);

		const result = await handleGetComponentDetails({ componentName: 'nonexistent' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent');
	});
});

// ---------------------------------------------------------------------------
// get_component_props
// ---------------------------------------------------------------------------
describe('handleGetComponentProps', () => {
	it('returns props content from the manifest', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({
			button: { props: FAKE_PROPS, examples: [], exampleCode: {} }
		}) as any);

		const result = await handleGetComponentProps({ componentName: 'button' });

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain(FAKE_PROPS);
	});

	it('returns an error when component is not in the manifest', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest() as any);

		const result = await handleGetComponentProps({ componentName: 'nonexistent' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent');
	});

	it('returns an error when props is null (model.ts missing)', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({
			'no-props': { props: null, examples: [], exampleCode: {} }
		}) as any);

		const result = await handleGetComponentProps({ componentName: 'no-props' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('model.ts');
	});
});

// ---------------------------------------------------------------------------
// list_design_token_categories
// ---------------------------------------------------------------------------
describe('handleListDesignTokenCategories', () => {
	it('returns categories whose files exist', async () => {
		// existsSync returns true for all paths (set in beforeEach)
		const result = await handleListDesignTokenCategories();

		expect(result.isError).toBeUndefined();
		const categories = JSON.parse(result.content[0].text);
		expect(Array.isArray(categories)).toBe(true);
		expect(categories).toContain('colors');
		expect(categories).toContain('spacing');
	});

	it('returns empty array when no token files exist', async () => {
		vi.mocked(existsSync).mockReturnValue(false);

		const result = await handleListDesignTokenCategories();

		expect(JSON.parse(result.content[0].text)).toEqual([]);
	});
});

// ---------------------------------------------------------------------------
// get_design_tokens
// ---------------------------------------------------------------------------
describe('handleGetDesignTokens', () => {
	it('returns filtered --db-* lines from the token file', async () => {
		vi.mocked(readFile).mockResolvedValue('--db-color-red: #ff0000;\n--db-spacing-md: 16px;\nsome-other: value;' as any);

		const result = await handleGetDesignTokens({ category: 'colors' });

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('--db-color-red');
		expect(result.content[0].text).not.toContain('some-other');
	});

	it('returns an error for an unknown category', async () => {
		const result = await handleGetDesignTokens({ category: 'nonexistent-category' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent-category');
	});

	it('returns an error when the token file does not exist', async () => {
		vi.mocked(existsSync).mockImplementation((p: any) => !String(p).endsWith('_variables.scss'));

		const result = await handleGetDesignTokens({ category: 'colors' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('token file not found');
	});
});

// ---------------------------------------------------------------------------
// list_icons
// ---------------------------------------------------------------------------
describe('handleListIcons', () => {
	it('returns icon names from the manifest', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({}, ['arrow_down', 'chevron_right']) as any);

		const result = await handleListIcons();

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('arrow_down');
		expect(result.content[0].text).toContain('chevron_right');
	});
});

// ---------------------------------------------------------------------------
// get_example_code
// ---------------------------------------------------------------------------
describe('handleGetExampleCode', () => {
	it('returns example code from the manifest via direct key match', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({
			button: {
				props: null,
				examples: ['Variant'],
				exampleCode: { react: { 'variant.example.tsx': FAKE_EXAMPLE_CODE }, angular: {}, vue: {} }
			}
		}) as any);

		const result = await handleGetExampleCode({ componentName: 'button', exampleName: 'Variant', framework: 'react' });

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain(FAKE_EXAMPLE_CODE);
	});

	it('returns an error when the example is not found', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({
			button: { props: null, examples: [], exampleCode: { react: {}, angular: {}, vue: {} } }
		}) as any);

		const result = await handleGetExampleCode({ componentName: 'button', exampleName: 'NonExistent', framework: 'react' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('NonExistent');
	});

	it('returns an error when the component is not in the manifest', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest() as any);

		const result = await handleGetExampleCode({ componentName: 'nonexistent', exampleName: 'Variant', framework: 'react' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent');
	});
});

// ---------------------------------------------------------------------------
// docs_search — IS_MONOREPO=false in test env, so always returns error
// ---------------------------------------------------------------------------
describe('handleDocsSearch', () => {
	it('returns an error because docs_search requires monorepo environment', async () => {
		const result = await handleDocsSearch({ query: 'accessibility', category: 'global' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('monorepo');
	});
});

// ---------------------------------------------------------------------------
// scaffold_page prompt
// ---------------------------------------------------------------------------
describe('handleScaffoldPagePrompt', () => {
	it('returns a user message with framework and page_type', () => {
		const text = assertUserMessage(handleScaffoldPagePrompt({ page_type: 'Dashboard', framework: 'react' }));

		expect(text).toContain('react');
		expect(text).toContain('Dashboard');
	});

	it('includes additional_requirements when provided', () => {
		const result = handleScaffoldPagePrompt({ page_type: 'Login', framework: 'vue', additional_requirements: 'dark mode' });

		expect(result.messages[0].content.text).toContain('dark mode');
	});

	it('falls back to "None specified." when additional_requirements is omitted', () => {
		const result = handleScaffoldPagePrompt({ page_type: 'Settings', framework: 'angular' });

		expect(result.messages[0].content.text).toContain('None specified.');
	});
});

// ---------------------------------------------------------------------------
// review_ui_code prompt
// ---------------------------------------------------------------------------
describe('handleReviewUiCodePrompt', () => {
	it('returns a user message containing the framework and code snippet', () => {
		const text = assertUserMessage(handleReviewUiCodePrompt({ code_snippet: '<DBButton>Save</DBButton>', framework: 'react' }));

		expect(text).toContain('react');
		expect(text).toContain('<DBButton>Save</DBButton>');
	});

	it('references the correct framework package in the prompt text', () => {
		const result = handleReviewUiCodePrompt({ code_snippet: '<db-button>Save</db-button>', framework: 'angular' });

		expect(result.messages[0].content.text).toContain('@db-ux/angular-core-components');
	});
});

// ---------------------------------------------------------------------------
// migrate_component prompt
// ---------------------------------------------------------------------------
describe('handleMigrateComponentPrompt', () => {
	it('returns a user message containing legacy code, source context, and target framework', () => {
		const text = assertUserMessage(handleMigrateComponentPrompt({
			legacy_code: '<button class="btn">Click</button>',
			source_context: 'bootstrap-4',
			target_framework: 'react'
		}));

		expect(text).toContain('bootstrap-4');
		expect(text).toContain('react');
		expect(text).toContain('<button class="btn">Click</button>');
	});

	it('includes the CLI migration hint in the prompt text', () => {
		const result = handleMigrateComponentPrompt({
			legacy_code: '<db-button>Old</db-button>',
			source_context: 'db-ui-v2',
			target_framework: 'angular'
		});

		expect(result.messages[0].content.text).toContain('@db-ux/core-migration');
	});
});

// ---------------------------------------------------------------------------
// audit_accessibility prompt
// ---------------------------------------------------------------------------
describe('handleAuditAccessibilityPrompt', () => {
	it('returns a user message containing the framework and code snippet', () => {
		const text = assertUserMessage(handleAuditAccessibilityPrompt({ code_snippet: '<DBInput label="Name" />', framework: 'react' }));

		expect(text).toContain('react');
		expect(text).toContain('<DBInput label="Name" />');
	});

	it('references WCAG 2.2 AA in the prompt text', () => {
		const result = handleAuditAccessibilityPrompt({ code_snippet: '<DBButton>Go</DBButton>', framework: 'vue' });

		expect(result.messages[0].content.text).toContain('WCAG 2.2 AA');
	});

	it('instructs the agent to call docs_search for accessibility guidelines', () => {
		const result = handleAuditAccessibilityPrompt({ code_snippet: '<DBButton>Go</DBButton>', framework: 'angular' });

		expect(result.messages[0].content.text).toContain("docs_search");
	});
});
