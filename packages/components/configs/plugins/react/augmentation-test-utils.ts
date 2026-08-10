import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

/**
 * Shared test suite factory for React type-augmentation build.post plugins.
 *
 * Both focusgroup and invoker-commands plugins share the same build.post
 * behaviour (locate src/index.ts and call the append function). This factory
 * generates the common test cases so each spec only needs to provide plugin-
 * specific details.
 */
export const describeBuildPostPlugin = (options: {
	/** The plugin factory (default export of the .cjs module) */
	pluginFactory: () => { build: { post: (ctx: any, files: any) => void } };
	/** The temporary directory (must be set in the outer beforeEach) */
	getTmpDir: () => string;
	/** Helper to write a file in tmpDir */
	writeFile: (relativePath: string, content?: string) => string;
	/** Content to write into src/index.ts for the augmentation test */
	indexContent: string;
	/** A string expected in the output after augmentation */
	expectedMarker: string;
}) => {
	describe('build.post plugin', () => {
		const runBuildPost = (files?: {
			componentFiles: { outputDir: string; outputFilePath: string }[];
			nonComponentFiles: {
				outputDir: string;
				outputFilePath: string;
			}[];
		}) => {
			const plugin = options.pluginFactory();
			return plugin.build.post({ target: 'react' }, files);
		};

		it('augments the index.ts found among the non-component files', () => {
			options.writeFile('src/index.ts', options.indexContent);

			runBuildPost({
				componentFiles: [
					{
						outputDir: options.getTmpDir(),
						outputFilePath: 'src/components/component/component.tsx'
					}
				],
				nonComponentFiles: [
					{
						outputDir: options.getTmpDir(),
						outputFilePath: 'src/index.ts'
					}
				]
			});

			expect(
				fs.readFileSync(
					path.join(options.getTmpDir(), 'src/index.ts'),
					'utf-8'
				)
			).toContain(options.expectedMarker);
		});

		it('does nothing when files is undefined', () => {
			expect(() => runBuildPost(undefined)).not.toThrow();
		});

		it('silently skips when no src/index.ts is present in the build output', () => {
			const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

			expect(() =>
				runBuildPost({
					componentFiles: [],
					nonComponentFiles: [
						{
							outputDir: options.getTmpDir(),
							outputFilePath: 'src/shared/model.ts'
						}
					]
				})
			).not.toThrow();

			// Storybook/Figma builds legitimately have no entrypoint, so no warning.
			expect(warn).not.toHaveBeenCalled();
		});
	});
};
