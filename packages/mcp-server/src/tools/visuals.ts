import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';
import type { ToolResult } from '../utils';
import { VISUALS_DIR, err, resolveSafePath, truncate } from '../utils';

/** Supported image extensions for visual lookup. */
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

/**
 * Resolves `VISUALS_DIR` relative to the **running** bundle (dist/index.js)
 * so that `npx @db-ux/mcp-server` finds the co-shipped `assets/` folder
 * regardless of the consumer's working directory.
 *
 * When running inside the monorepo (`npm run dev`), `VISUALS_DIR` from
 * `path.ts` already points to the correct location; at publish-time
 * the layout is `dist/index.js` + `assets/visuals/` as siblings.
 */
function getVisualsDir(): string {
	// Prefer the monorepo constant when the directory exists (dev mode)
	if (existsSync(VISUALS_DIR)) return VISUALS_DIR;
	// Fallback: resolve relative to the running bundle (npx / global install)
	return resolve(import.meta.dirname, '..', 'assets', 'visuals');
}

/**
 * Looks for a curated reference image in the `assets/visuals/` directory.
 * Files are matched by exact name (e.g. `button.png`, `dashboard.jpg`).
 */
function findImage(name: string): string | null {
	const dir = getVisualsDir();
	if (!existsSync(dir)) return null;

	for (const ext of IMAGE_EXTENSIONS) {
		let safePath: string;
		try {
			safePath = resolveSafePath(dir, `${name}${ext}`);
		} catch {
			continue;
		}
		if (existsSync(safePath)) return safePath;
	}
	return null;
}

/**
 * Maximum dimension (width or height) after downsampling.
 * Capped at 800 px to keep the Base64 payload well under
 * the 100 000-character MCP client limit.
 */
const MAX_DIMENSION = 800;

/**
 * JPEG quality for the returned image.
 * 75 is a good trade-off between file size and visual fidelity for
 * reference screenshots that only need to convey layout, not pixel-perfection.
 */
const JPEG_QUALITY = 75;

/**
 * Downsamples an image so that neither width nor height exceeds
 * {@link MAX_DIMENSION} (800 px) and returns a Base64-encoded **JPEG**
 * buffer compressed at {@link JPEG_QUALITY}.
 *
 * Previous behavior (PNG, 1.15 MP budget) produced payloads that exceeded
 * the 100 000-char client limit for large visuals like the dashboard.
 */
async function downsampleImage(imagePath: string): Promise<{
	data: string;
	mimeType: 'image/jpeg';
}> {
	const buffer = await sharp(imagePath)
		.resize(MAX_DIMENSION, MAX_DIMENSION, {
			fit: 'inside',
			withoutEnlargement: true,
			kernel: 'linear' as keyof sharp.KernelEnum
		})
		.jpeg({ quality: JPEG_QUALITY })
		.toBuffer();

	return {
		data: buffer.toString('base64'),
		mimeType: 'image/jpeg'
	};
}

/**
 * MCP tool handler: `get_component_visual`
 *
 * Fetches a visual reference image for a DB UX component or page layout,
 * downsamples it to max 800×800 px (bilinear interpolation), compresses
 * as JPEG (quality 75), and returns it as a Base64-encoded MCP image block.
 *
 * Images are resolved from the `assets/visuals/` directory that ships
 * with the `@db-ux/mcp-server` package.
 *
 * This tool is **opt-in only** — it should be invoked by the LLM when visual
 * context is needed for complex layouts, z-index reasoning, or verifying
 * visual hierarchies.
 */
export async function handleGetComponentVisual({
	componentName
}: {
	componentName: string;
}): Promise<ToolResult> {
	const imagePath = findImage(componentName);

	if (!imagePath) {
		return err(
			`No visual found for '${componentName}'. ` +
				`Available visuals must be placed in the assets/visuals/ directory ` +
				`of the @db-ux/mcp-server package (e.g. assets/visuals/${componentName}.png).`
		);
	}

	try {
		const { data, mimeType } = await downsampleImage(imagePath);

		return {
			content: [
				{
					type: 'image',
					data,
					mimeType
				},
				{
					type: 'text',
					text: `Visual reference for '${componentName}' (max 800×800 px, JPEG q75, bilinear interpolation).`
				}
			]
		};
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		return err(
			`Failed to process visual for '${componentName}': ${truncate(message, 500)}`
		);
	}
}
