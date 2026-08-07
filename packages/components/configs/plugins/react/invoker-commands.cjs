const fs = require('node:fs');
const { createBuildPostHandler } = require('./augmentation-utils.cjs');

/**
 * Type augmentation that extends React's `ButtonHTMLAttributes` with the
 * `command` and `commandfor` HTML attributes of the Invoker Commands API.
 *
 * React's type definitions do not ship these attributes yet, so consumers of
 * `@db-ux/react-core-components` would otherwise get a type error when passing
 * them to `DBButton`. The augmentation is type-only (`declare module`), so it
 * adds no runtime code to the published bundle.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API
 */
const AUGMENTATION = `
/**
 * Type augmentation for Invoker Commands API
 * https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API
 *
 * Extends React's ButtonHTMLAttributes to include the \`command\` and \`commandfor\`
 * HTML attributes for declarative dialog control via Invoker Commands.
 *
 * TODO: This augmentation can be removed once React's type definitions
 * natively support these attributes.
 */
declare module "react" {
	interface ButtonHTMLAttributes<T> {
		command?: string | undefined;
		commandfor?: string | undefined;
	}
}
`;

/**
 * Appends the Invoker Commands type augmentation to the given file.
 *
 * No idempotency guard is needed: Mitosis always regenerates output files
 * fresh before post-build plugins run (see AGENTS.md "Build Pipeline" section).
 *
 * @param {string} filePath - Absolute path to the React entrypoint (`src/index.ts`)
 * @returns {boolean} `true` if the augmentation was written, otherwise `false`
 */
const appendInvokerCommandsAugmentation = (filePath) => {
	if (!fs.existsSync(filePath)) {
		console.warn(
			`[react-invoker-commands] Entrypoint "${filePath}" not found — skipping augmentation`
		);
		return false;
	}

	const source = fs.readFileSync(filePath, 'utf-8');

	// Guarantee exactly one blank line between the existing exports and the
	// appended augmentation, regardless of the source's trailing whitespace.
	const normalized = source.replace(/\s*$/, '\n');
	fs.writeFileSync(filePath, normalized + AUGMENTATION, 'utf-8');
	return true;
};

/**
 * Mitosis `build.post` plugin that augments the generated React entrypoint with
 * the Invoker Commands API attribute types.
 *
 * Registered for the React target only (see `configs/react/index.cjs`). It runs
 * after the Mitosis build has written the output files and locates the
 * `src/index.ts` entrypoint among the non-component files, so no filesystem
 * walk is required.
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'react-invoker-commands',
	build: {
		post: createBuildPostHandler(appendInvokerCommandsAugmentation)
	}
});

module.exports.AUGMENTATION = AUGMENTATION;
module.exports.appendInvokerCommandsAugmentation =
	appendInvokerCommandsAugmentation;
