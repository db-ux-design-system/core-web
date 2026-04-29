/**
 * Prebuild step: optimise visual reference images.
 *
 * Reads source PNGs from src/data/visuals-source/, downsamples them to
 * max 800×800 px, compresses as JPEG (quality 75), and writes them to
 * assets/visuals/. This keeps sharp out of the runtime bundle entirely.
 *
 * Invoked by prebuild.ts — NOT imported at server runtime.
 */

import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIR = join(PKG_ROOT, 'src/data/visuals-source');
const OUTPUT_DIR = join(PKG_ROOT, 'assets/visuals');

const MAX_DIMENSION = 800;
const JPEG_QUALITY = 75;
const SUPPORTED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp']);

export async function buildVisuals(): Promise<void> {
	if (!existsSync(SOURCE_DIR)) {
		console.warn(
			`[prebuild:visuals] SKIP: source directory not found: ${SOURCE_DIR}`
		);
		return;
	}

	// Dynamic import so sharp is only loaded at build time
	const sharp = (await import('sharp')).default;

	mkdirSync(OUTPUT_DIR, { recursive: true });

	const files = readdirSync(SOURCE_DIR).filter((f) =>
		SUPPORTED_EXTENSIONS.has(extname(f).toLowerCase())
	);

	if (files.length === 0) {
		console.warn('[prebuild:visuals] SKIP: no source images found');
		return;
	}

	let processed = 0;
	for (const file of files) {
		const inputPath = join(SOURCE_DIR, file);
		const outputName = `${basename(file, extname(file))}.jpg`;
		const outputPath = join(OUTPUT_DIR, outputName);

		await sharp(inputPath)
			.resize(MAX_DIMENSION, MAX_DIMENSION, {
				fit: 'inside',
				withoutEnlargement: true
			})
			.jpeg({ quality: JPEG_QUALITY })
			.toFile(outputPath);

		processed++;
	}

	console.log(
		`[prebuild:visuals] generated: ${processed} optimised images in assets/visuals/`
	);
}
