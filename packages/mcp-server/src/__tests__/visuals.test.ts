/**
 * Integration tests for the `get_component_visual` tool.
 *
 * These tests use the **real** images shipped in assets/visuals/ and the real
 * sharp library — no mocking. This validates the full pipeline: file lookup →
 * sharp downsampling → Base64 encoding → MCP result shape.
 */
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';
import { handleGetComponentVisual } from '../tools';

/** Maximum dimension (width or height) after downsampling. */
const MAX_DIMENSION = 800;

// ---------------------------------------------------------------------------
// Successful lookups — real images from assets/visuals/
// ---------------------------------------------------------------------------
describe('handleGetComponentVisual', () => {
	it('returns an image content block for an existing visual (dashboard)', async () => {
		const result = await handleGetComponentVisual({
			componentName: 'dashboard'
		});

		expect(result.isError).toBeUndefined();
		expect(result.content).toHaveLength(2);

		// First block: image
		const imageBlock = result.content[0];
		expect(imageBlock.type).toBe('image');
		expect((imageBlock as any).mimeType).toBe('image/jpeg');
		expect((imageBlock as any).data).toBeTruthy();

		// Second block: text description
		const textBlock = result.content[1];
		expect(textBlock.type).toBe('text');
		expect((textBlock as any).text).toContain('dashboard');
	});

	it.each(['dashboard', 'form', 'landingpage', 'table'])(
		'returns a valid result for "%s"',
		async (name) => {
			const result = await handleGetComponentVisual({
				componentName: name
			});

			expect(result.isError).toBeUndefined();
			expect(result.content[0].type).toBe('image');
		}
	);

	// -----------------------------------------------------------------------
	// Downsampling constraint: output must stay ≤ 800 px on each side
	// -----------------------------------------------------------------------
	it.each(['dashboard', 'form', 'landingpage', 'table'])(
		'downsamples "%s" to max 800×800 px and returns JPEG',
		async (name) => {
			const result = await handleGetComponentVisual({
				componentName: name
			});

			expect(result.isError).toBeUndefined();

			const imageBlock = result.content[0] as {
				type: 'image';
				data: string;
				mimeType: string;
			};
			const buffer = Buffer.from(imageBlock.data, 'base64');
			const metadata = await sharp(buffer).metadata();

			expect(metadata.width).toBeLessThanOrEqual(MAX_DIMENSION);
			expect(metadata.height).toBeLessThanOrEqual(MAX_DIMENSION);
			expect(metadata.format).toBe('jpeg');
			expect(imageBlock.mimeType).toBe('image/jpeg');
		}
	);

	// -----------------------------------------------------------------------
	// Error cases
	// -----------------------------------------------------------------------
	it('returns an error for a nonexistent visual', async () => {
		const result = await handleGetComponentVisual({
			componentName: 'nonexistent-component-xyz'
		});

		expect(result.isError).toBe(true);
		expect(result.content[0].type).toBe('text');
		expect((result.content[0] as any).text).toContain('No visual found');
	});

	it('returns an error for an empty component name', async () => {
		const result = await handleGetComponentVisual({
			componentName: ''
		});

		expect(result.isError).toBe(true);
	});

	// -----------------------------------------------------------------------
	// Security: path traversal protection
	// -----------------------------------------------------------------------
	it('rejects path traversal in componentName', async () => {
		const result = await handleGetComponentVisual({
			componentName: '../../../etc/passwd'
		});

		expect(result.isError).toBe(true);
		expect((result.content[0] as any).text).toContain('No visual found');
	});

	it('rejects URL-encoded path traversal', async () => {
		const result = await handleGetComponentVisual({
			componentName: '..%2F..%2F..%2Fetc%2Fpasswd'
		});

		expect(result.isError).toBe(true);
	});

	it('rejects double-encoded path traversal', async () => {
		const result = await handleGetComponentVisual({
			componentName: '..%252F..%252Fetc%252Fpasswd'
		});

		expect(result.isError).toBe(true);
	});
});
