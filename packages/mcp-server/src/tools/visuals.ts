import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';
import type { ToolResult } from '../utils';
import { VISUALS_DIR, err, resolveSafePath, truncate } from '../utils';

/**
 * Maximum number of pixels (width × height) allowed after downsampling.
 * The architecture requirement specifies "below 1,15 Megapixel".
 * 1,150,000 px budget – e.g. 1024×1024 = 1,048,576 stays well within bounds.
 */
const MAX_PIXELS = 1_150_000;

/** Supported image extensions for visual lookup. */
const IMAGE_EXTENSIONS = ['.png', '.jpg'];

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
 * Downsamples an image so that its total pixel count stays below
 * {@link MAX_PIXELS} (≈ 1.15 megapixels) using bilinear interpolation
 * and returns a Base64-encoded PNG buffer.
 *
 * If the image is already within the budget it is passed through as PNG
 * without rescaling (only re-encoded to ensure consistent output format).
 */
async function downsampleImage(imagePath: string): Promise<{
	data: string;
	mimeType: 'image/png';
}> {
	const image = sharp(imagePath);
	const metadata = await image.metadata();
	const width = metadata.width ?? 0;
	const height = metadata.height ?? 0;
	const totalPixels = width * height;

	let pipeline = image;

	if (totalPixels > MAX_PIXELS && width > 0 && height > 0) {
		// Calculate the uniform scale factor that brings us below MAX_PIXELS
		const scale = Math.sqrt(MAX_PIXELS / totalPixels);
		const targetWidth = Math.round(width * scale);
		const targetHeight = Math.round(height * scale);

		pipeline = pipeline.resize(targetWidth, targetHeight, {
			fit: 'inside',
			// Bilinear interpolation — 'linear' is supported at runtime by
			// sharp/libvips but missing from the TS type declarations in 0.33.x.
			kernel: 'linear' as keyof sharp.KernelEnum
		});
	}

	const buffer = await pipeline.png().toBuffer();
	return {
		data: buffer.toString('base64'),
		mimeType: 'image/png'
	};
}

/**
 * MCP tool handler: `get_component_visual`
 *
 * Fetches a visual reference image for a DB UX component or page layout,
 * downsamples it to stay under 1.15 megapixels (bilinear interpolation),
 * and returns it as a Base64-encoded MCP image content block.
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
					text: `Visual reference for '${componentName}' (downsampled to ≤1.15MP, bilinear interpolation).`
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
