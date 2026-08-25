const path = require('node:path');

/**
 * Creates a Mitosis `build.post` handler that locates the React entrypoint
 * (`src/index.ts`) among the generated non-component files and passes its
 * absolute path to the provided append function.
 *
 * Shared by multiple React type-augmentation plugins (focusgroup, invoker-commands)
 * to avoid duplicating the file-lookup boilerplate.
 *
 * @param {(filePath: string) => boolean} appendFn - The augmentation function to call with the entrypoint path
 * @returns {(targetContext: any, files: any) => void} The build.post handler
 */
const createBuildPostHandler = (appendFn) => (targetContext, files) => {
	if (!files) return;

	// `configs/react/index.cjs` is also reused by the Storybook and
	// Figma Code Connect builds, which do not emit a `src/index.ts`
	// entrypoint. Missing it is therefore the expected case there, so we
	// silently skip rather than warn (mirroring how esm-extensions stays
	// quiet when there is nothing to do).
	const indexFile = (files.nonComponentFiles || []).find(
		(file) => file.outputFilePath === 'src/index.ts'
	);
	if (!indexFile) return;

	const filePath = path.resolve(
		indexFile.outputDir,
		indexFile.outputFilePath
	);
	appendFn(filePath);
};

module.exports = { createBuildPostHandler };
