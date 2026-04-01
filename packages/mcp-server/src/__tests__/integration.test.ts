import { beforeEach, describe, expect, it, vi } from 'vitest';
import { resetManifestCache } from '../utils/manifest';

const { resolveSafePath } = await import('../utils/index.js');
const {
	handleListComponents,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleListDesignTokenCategories,
	handleGetDesignTokens,
	handleListIcons,
	handleGetExampleCode,
	handleDocsSearch,
	handleListMigrationGuides,
	handleGetMigrationGuide
} = await import('../tools/index.js');
const {
	handleScaffoldPagePrompt,
	handleReviewUiCodePrompt,
	handleAuditAccessibilityPrompt
} = await import('../prompts/index.js');

const FAKE_PROPS = 'export interface FakeProps { label: string; }';
const FAKE_EXAMPLE_CODE = '<DBButton>Click</DBButton>';

/**
 * Serialises a partial manifest structure and parses it back for use as a
 * resetManifestCache override.
 */
function makeManifest(
	components: Record<string, unknown> = {},
	icons: string[] = [],
	tokens: Record<string, string> = {},
	docs: Record<string, string> = {},
	migrationGuides: Record<string, string> = {}
) {
	return JSON.stringify({ icons, components, tokens, docs, migrationGuides });
}

/**
 * Builds a manifest JSON string containing a single "button" component whose
 * react exampleCode is populated with the given example file keys.
 * Used to exercise the fuzzy-matching logic in handleGetExampleCode.
 */
function makeFuzzyManifest(exampleKeys: string[]) {
	const exampleCode: Record<string, Record<string, string>> = {
		react: {},
		angular: {},
		vue: {},
		'web-components': {},
		html: {}
	};
	for (const key of exampleKeys) {
		exampleCode['react'][key] = `// source of ${key}`;
	}
	return JSON.stringify({
		icons: [],
		components: { button: { props: null, examples: [], exampleCode } }
	});
}

/**
 * Asserts that a prompt handler result contains exactly one user-role message
 * and returns its text content for further assertions.
 */
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
});

// ---------------------------------------------------------------------------
// list_components
// ---------------------------------------------------------------------------
describe('handleListComponents', () => {
	it('returns component names from the manifest', async () => {
		resetManifestCache(JSON.parse(makeManifest({ button: {}, input: {} })));

		const result = await handleListComponents();

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('button');
		expect(result.content[0].text).toContain('input');
	});

	it('returns an empty array when manifest has no components', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleListComponents();

		expect(result.content[0].text).toBe('[]');
	});
});

// ---------------------------------------------------------------------------
// get_component_details
// ---------------------------------------------------------------------------
describe('handleGetComponentDetails', () => {
	it('returns example names from the manifest', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest({
					button: {
						props: null,
						examples: ['Variant', 'Show Icon Leading'],
						exampleCode: {}
					}
				})
			)
		);

		const result = await handleGetComponentDetails({
			componentName: 'button'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('Variant');
		expect(result.content[0].text).toContain('Show Icon Leading');
	});

	it('returns "No examples found." when examples array is empty', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest({
					button: { props: null, examples: [], exampleCode: {} }
				})
			)
		);

		const result = await handleGetComponentDetails({
			componentName: 'button'
		});

		expect(result.content[0].text).toBe('No examples found.');
	});

	it('returns an error for unknown component', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleGetComponentDetails({
			componentName: 'nonexistent'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent');
	});
});

// ---------------------------------------------------------------------------
// get_component_props
// ---------------------------------------------------------------------------
describe('handleGetComponentProps', () => {
	it('returns props content from the manifest', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest({
					button: { props: FAKE_PROPS, examples: [], exampleCode: {} }
				})
			)
		);

		const result = await handleGetComponentProps({
			componentName: 'button'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain(FAKE_PROPS);
	});

	it('returns an error when component is not in the manifest', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleGetComponentProps({
			componentName: 'nonexistent'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent');
	});

	it('returns an error when props is null (model.ts missing)', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest({
					'no-props': { props: null, examples: [], exampleCode: {} }
				})
			)
		);

		const result = await handleGetComponentProps({
			componentName: 'no-props'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('model.ts');
	});
});

// ---------------------------------------------------------------------------
// list_design_token_categories
// ---------------------------------------------------------------------------
describe('handleListDesignTokenCategories', () => {
	it('returns categories from manifest.tokens', async () => {
		resetManifestCache(
			JSON.parse(makeManifest({}, [], { colors: '', spacing: '' }))
		);

		const result = await handleListDesignTokenCategories();

		expect(result.isError).toBeUndefined();
		const categories = JSON.parse(result.content[0].text);
		expect(categories).toContain('colors');
		expect(categories).toContain('spacing');
	});

	it('returns empty array when manifest.tokens is empty', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleListDesignTokenCategories();

		expect(JSON.parse(result.content[0].text)).toEqual([]);
	});
});

// ---------------------------------------------------------------------------
// get_design_tokens
// ---------------------------------------------------------------------------
describe('handleGetDesignTokens', () => {
	it('returns filtered --db-* lines from manifest.tokens', async () => {
		const scss =
			'--db-color-red: #ff0000;\n--db-spacing-md: 16px;\nsome-other: value;';
		resetManifestCache(JSON.parse(makeManifest({}, [], { colors: scss })));

		const result = await handleGetDesignTokens({ category: 'colors' });

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('--db-color-red');
		expect(result.content[0].text).not.toContain('some-other');
	});

	it('returns an error for an unknown category', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleGetDesignTokens({
			category: 'nonexistent-category'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent-category');
	});
});

// ---------------------------------------------------------------------------
// list_icons
// ---------------------------------------------------------------------------
describe('handleListIcons', () => {
	it('returns icon names from the manifest', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest({}, [
					'arrow_down',
					'chevron_right',
					'person',
					'alarm_clock'
				])
			)
		);

		const result = await handleListIcons();

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('arrow_down');
		expect(result.content[0].text).toContain('chevron_right');
		expect(result.content[0].text).toContain('person');
		expect(result.content[0].text).toContain('alarm_clock');
	});

	it('returns empty array when manifest has no icons (manifest mode does not read migration file)', async () => {
		resetManifestCache(JSON.parse(makeManifest({}, [])));

		const result = await handleListIcons();

		expect(result.isError).toBeUndefined();
		const icons = JSON.parse(result.content[0].text);
		expect(Array.isArray(icons)).toBe(true);
		expect(icons).toEqual([]);
	});
});

// ---------------------------------------------------------------------------
// get_example_code
// ---------------------------------------------------------------------------
describe('handleGetExampleCode', () => {
	it('returns example code from the manifest via direct key match', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest({
					button: {
						props: null,
						examples: ['Variant'],
						exampleCode: {
							react: { 'variant.example.tsx': FAKE_EXAMPLE_CODE },
							angular: {},
							vue: {}
						}
					}
				})
			)
		);

		const result = await handleGetExampleCode({
			componentName: 'button',
			exampleName: 'Variant',
			framework: 'react'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain(FAKE_EXAMPLE_CODE);
	});

	it('returns an error when the example is not found', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest({
					button: {
						props: null,
						examples: [],
						exampleCode: { react: {}, angular: {}, vue: {} }
					}
				})
			)
		);

		const result = await handleGetExampleCode({
			componentName: 'button',
			exampleName: 'NonExistent',
			framework: 'react'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('NonExistent');
	});

	it('returns an error when the component is not in the manifest', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleGetExampleCode({
			componentName: 'nonexistent',
			exampleName: 'Variant',
			framework: 'react'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent');
	});

	// -------------------------------------------------------------------------
	// Fuzzy matching
	// -------------------------------------------------------------------------
	it('fuzzy: exact match wins over partial candidate', async () => {
		resetManifestCache(
			JSON.parse(
				makeFuzzyManifest([
					'size.example.tsx',
					'size-large.example.tsx'
				])
			)
		);

		const result = await handleGetExampleCode({
			componentName: 'button',
			exampleName: 'size',
			framework: 'react'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toBe('// source of size.example.tsx');
	});

	it('fuzzy: falls back to partial match when no exact file exists', async () => {
		resetManifestCache(
			JSON.parse(makeFuzzyManifest(['size-large.example.tsx']))
		);

		const result = await handleGetExampleCode({
			componentName: 'button',
			exampleName: 'size',
			framework: 'react'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toBe(
			'// source of size-large.example.tsx'
		);
	});

	it('fuzzy: returns error when neither exact nor partial match exists', async () => {
		resetManifestCache(
			JSON.parse(makeFuzzyManifest(['variant.example.tsx']))
		);

		const result = await handleGetExampleCode({
			componentName: 'button',
			exampleName: 'size',
			framework: 'react'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain("'size'");
	});

	it('fuzzy: stem.includes(kebab) match is intentionally allowed', async () => {
		resetManifestCache(
			JSON.parse(makeFuzzyManifest(['icon-size.example.tsx']))
		);

		const result = await handleGetExampleCode({
			componentName: 'button',
			exampleName: 'size',
			framework: 'react'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toBe(
			'// source of icon-size.example.tsx'
		);
	});

	it('fuzzy: exact match wins over stem.includes(kebab) when both present', async () => {
		resetManifestCache(
			JSON.parse(
				makeFuzzyManifest(['icon-size.example.tsx', 'size.example.tsx'])
			)
		);

		const result = await handleGetExampleCode({
			componentName: 'button',
			exampleName: 'size',
			framework: 'react'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toBe('// source of size.example.tsx');
	});

	// -------------------------------------------------------------------------
	// Path traversal protection
	// -------------------------------------------------------------------------
	it('security: rejects path traversal in componentName', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleGetExampleCode({
			componentName: '../../etc/passwd',
			exampleName: 'Variant',
			framework: 'react'
		});

		expect(result.isError).toBe(true);
	});

	it('security: rejects URL-encoded path traversal in componentName', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleGetExampleCode({
			componentName: 'button%2F..%2F..%2Fetc%2Fpasswd',
			exampleName: 'Variant',
			framework: 'react'
		});

		expect(result.isError).toBe(true);
	});
});

// ---------------------------------------------------------------------------
// list_migration_guides
// ---------------------------------------------------------------------------
describe('handleListMigrationGuides', () => {
	it('returns guide names from the manifest', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest(
					{},
					[],
					{},
					{},
					{
						'db-ui-color-migration':
							'# DB-UI → DB-UX Color Migration',
						'db-ui-component-migration': '# DB UI to DB UX'
					}
				)
			)
		);

		const result = await handleListMigrationGuides();

		expect(result.isError).toBeUndefined();
		const names = JSON.parse(result.content[0].text);
		expect(names).toContain('db-ui-color-migration');
		expect(names).toContain('db-ui-component-migration');
	});

	it('returns an empty array when no migration guides exist', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleListMigrationGuides();

		expect(JSON.parse(result.content[0].text)).toEqual([]);
	});
});

// ---------------------------------------------------------------------------
// get_migration_guide
// ---------------------------------------------------------------------------
describe('handleGetMigrationGuide', () => {
	it('returns the full markdown content of a guide', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest(
					{},
					[],
					{},
					{},
					{
						'db-ui-component-migration': '# DB UI to DB UX'
					}
				)
			)
		);

		const result = await handleGetMigrationGuide({
			guideName: 'db-ui-component-migration'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('# DB UI to DB UX');
	});

	it('returns an error for an unknown guide name', async () => {
		resetManifestCache(JSON.parse(makeManifest()));

		const result = await handleGetMigrationGuide({
			guideName: 'nonexistent-guide'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent-guide');
		expect(result.content[0].text).toContain('list_migration_guides');
	});
});

// ---------------------------------------------------------------------------
// docs_search — IS_MONOREPO=false in test env, falls back to manifest.docs
// ---------------------------------------------------------------------------
describe('handleDocsSearch', () => {
	it('returns matching docs from the manifest', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest(
					{},
					[],
					{},
					{
						'docs/development.md':
							'# Development\nHow to contribute and set up the project.'
					}
				)
			)
		);

		const result = await handleDocsSearch({
			query: 'contribute',
			category: 'global'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('Development');
	});

	it('returns no-match message when query has no results', async () => {
		resetManifestCache(
			JSON.parse(
				makeManifest(
					{},
					[],
					{},
					{
						'docs/development.md': '# Development'
					}
				)
			)
		);

		const result = await handleDocsSearch({
			query: 'xyznonexistent',
			category: 'global'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain('No documentation found');
	});
});

// ---------------------------------------------------------------------------
// scaffold_page prompt
// ---------------------------------------------------------------------------
describe('handleScaffoldPagePrompt', () => {
	it('returns a user message with framework and page_type', () => {
		const text = assertUserMessage(
			handleScaffoldPagePrompt({
				page_type: 'Dashboard',
				framework: 'react'
			})
		);

		expect(text).toContain('react');
		expect(text).toContain('Dashboard');
	});

	it('includes additional_requirements when provided', () => {
		const result = handleScaffoldPagePrompt({
			page_type: 'Login',
			framework: 'vue',
			additional_requirements: 'dark mode'
		});

		expect(result.messages[0].content.text).toContain('dark mode');
	});

	it('falls back to "None specified." when additional_requirements is omitted', () => {
		const result = handleScaffoldPagePrompt({
			page_type: 'Settings',
			framework: 'angular'
		});

		expect(result.messages[0].content.text).toContain('None specified.');
	});
});

// ---------------------------------------------------------------------------
// review_ui_code prompt
// ---------------------------------------------------------------------------
describe('handleReviewUiCodePrompt', () => {
	it('returns a user message containing the framework and code snippet', () => {
		const text = assertUserMessage(
			handleReviewUiCodePrompt({
				code_snippet: '<DBButton>Save</DBButton>',
				framework: 'react'
			})
		);

		expect(text).toContain('react');
		expect(text).toContain('<DBButton>Save</DBButton>');
	});

	it('references the correct framework package in the prompt text', () => {
		const result = handleReviewUiCodePrompt({
			code_snippet: '<db-button>Save</db-button>',
			framework: 'angular'
		});

		expect(result.messages[0].content.text).toContain(
			'@db-ux/ngx-core-components'
		);
	});
});

// ---------------------------------------------------------------------------
// audit_accessibility prompt
// ---------------------------------------------------------------------------
describe('handleAuditAccessibilityPrompt', () => {
	it('returns a user message containing the framework and code snippet', () => {
		const text = assertUserMessage(
			handleAuditAccessibilityPrompt({
				code_snippet: '<DBInput label="Name" />',
				framework: 'react'
			})
		);

		expect(text).toContain('react');
		expect(text).toContain('<DBInput label="Name" />');
	});

	it('references WCAG 2.2 AA in the prompt text', () => {
		const result = handleAuditAccessibilityPrompt({
			code_snippet: '<DBButton>Go</DBButton>',
			framework: 'vue'
		});

		expect(result.messages[0].content.text).toContain('WCAG 2.2 AA');
	});

	it('instructs the agent to call docs_search for accessibility guidelines', () => {
		const result = handleAuditAccessibilityPrompt({
			code_snippet: '<DBButton>Go</DBButton>',
			framework: 'angular'
		});

		expect(result.messages[0].content.text).toContain('docs_search');
	});
});

// ---------------------------------------------------------------------------
// resolveSafePath — unit tests for path traversal protection
// ---------------------------------------------------------------------------
describe('resolveSafePath', () => {
	const BASE = '/mock/base/dir';

	describe('valid paths', () => {
		it('resolves a normal nested path inside the base', () => {
			expect(
				resolveSafePath(BASE, 'button/examples/variant.example.tsx')
			).toBe(`${BASE}/button/examples/variant.example.tsx`);
		});

		it('resolves a single filename inside the base', () => {
			expect(resolveSafePath(BASE, 'button')).toBe(`${BASE}/button`);
		});
	});

	describe('standard path traversal', () => {
		it('rejects ../../../etc/passwd', () => {
			expect(() => resolveSafePath(BASE, '../../../etc/passwd')).toThrow(
				'Path traversal detected'
			);
		});

		it('rejects ../outside-folder/file.ts', () => {
			expect(() =>
				resolveSafePath(BASE, '../outside-folder/file.ts')
			).toThrow('Path traversal detected');
		});
	});

	describe('single URL-encoded traversal', () => {
		it('rejects %2E%2E%2F%2E%2E%2F (../ ../)', () => {
			expect(() =>
				resolveSafePath(BASE, '%2E%2E%2F%2E%2E%2Fetc%2Fpasswd')
			).toThrow('Path traversal detected');
		});

		it('rejects %2F prefixed absolute path', () => {
			expect(() => resolveSafePath(BASE, '%2Fetc%2Fpasswd')).toThrow(
				'Path traversal detected'
			);
		});
	});

	describe('double URL-encoded traversal', () => {
		it('rejects %252E%252E%252F (double-encoded ../)', () => {
			expect(() =>
				resolveSafePath(
					BASE,
					'%252E%252E%252F%252E%252E%252Fetc%252Fpasswd'
				)
			).toThrow('Path traversal detected');
		});

		it('rejects %252F prefixed absolute path', () => {
			expect(() => resolveSafePath(BASE, '%252Fetc%252Fpasswd')).toThrow(
				'Path traversal detected'
			);
		});
	});

	describe('absolute path injection', () => {
		it('rejects Unix absolute path /var/log/syslog', () => {
			expect(() => resolveSafePath(BASE, '/var/log/syslog')).toThrow(
				'Path traversal detected'
			);
		});

		// On Unix, backslashes are literal filename characters — resolves safely inside base.
		it('treats Windows-style path as a literal subdirectory on Unix', () => {
			expect(
				resolveSafePath(BASE, 'C:\\Windows\\System32').startsWith(BASE)
			).toBe(true);
		});
	});
});
