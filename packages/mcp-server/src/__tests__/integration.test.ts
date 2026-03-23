import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('node:fs', () => ({ existsSync: vi.fn() }));
vi.mock('node:fs/promises', () => ({ readFile: vi.fn(), readdir: vi.fn() }));

const { existsSync } = await import('node:fs');
const { readFile } = await import('node:fs/promises');
const { handleGetComponentProps, handleScaffoldPagePrompt, resetManifestCache } = await import('../index.js');

const FAKE_PROPS = 'export interface FakeProps { label: string; }';

function makeManifest(components: Record<string, unknown> = {}) {
	return JSON.stringify({ icons: [], components });
}

describe('handleScaffoldPagePrompt', () => {
	it('returns a user message containing the framework and page_type', () => {
		const result = handleScaffoldPagePrompt({ page_type: 'Dashboard', framework: 'react' });

		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].role).toBe('user');
		expect(result.messages[0].content.text).toContain('react');
		expect(result.messages[0].content.text).toContain('Dashboard');
	});

	it('includes additional_requirements when provided', () => {
		const result = handleScaffoldPagePrompt({
			page_type: 'Login',
			framework: 'vue',
			additional_requirements: 'must support dark mode'
		});

		const text = result.messages[0].content.text;
		expect(text).toContain('vue');
		expect(text).toContain('Login');
		expect(text).toContain('must support dark mode');
	});

	it('falls back to "None specified." when additional_requirements is omitted', () => {
		const result = handleScaffoldPagePrompt({ page_type: 'Settings', framework: 'angular' });

		expect(result.messages[0].content.text).toContain('None specified.');
	});
});

describe('handleGetComponentProps', () => {
	beforeEach(() => {
		vi.resetAllMocks();
		resetManifestCache();
		// manifest.json must appear to exist so getManifest() proceeds to readFile
		vi.mocked(existsSync).mockReturnValue(true);
	});

	it('returns the model.ts content when the component exists in the manifest', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({
			button: { props: FAKE_PROPS, examples: [], exampleCode: {} }
		}) as any);

		const result = await handleGetComponentProps({ componentName: 'button' });

		expect(result.isError).toBeUndefined();
		expect(result.content[0].text).toContain(FAKE_PROPS);
	});

	it('returns an error when the component is not in the manifest', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest() as any);

		const result = await handleGetComponentProps({ componentName: 'nonexistent' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('nonexistent');
	});

	it('returns an error when the component exists but props is null (model.ts missing)', async () => {
		vi.mocked(readFile).mockResolvedValue(makeManifest({
			button: { props: null, examples: [], exampleCode: {} }
		}) as any);

		const result = await handleGetComponentProps({ componentName: 'button' });

		expect(result.isError).toBe(true);
		expect(result.content[0].text).toContain('model.ts');
	});
});
