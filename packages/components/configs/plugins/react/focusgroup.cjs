const fs = require('node:fs');
const path = require('node:path');
const { createBuildPostHandler } = require('./augmentation-utils.cjs');

/**
 * Type augmentation that extends React's `HTMLAttributes` with the
 * `focusgroup` HTML attribute for declarative keyboard navigation.
 *
 * React's type definitions do not ship this attribute yet, so consumers of
 * `@db-ux/react-core-components` would otherwise get a type error when it
 * appears on elements like `<div focusgroup="tablist">`. The augmentation is
 * type-only (`declare module`), so it adds no runtime code to the published
 * bundle.
 *
 * TODO: This augmentation can be removed once React's type definitions
 * natively support the focusgroup attribute.
 *
 * @see https://developer.chrome.com/blog/focusgroup-rfc
 */
const AUGMENTATION = `
/**
 * Type augmentation for the focusgroup HTML attribute
 * https://developer.chrome.com/blog/focusgroup-rfc
 *
 * Extends React's HTMLAttributes to include the \`focusgroup\` attribute for
 * declarative arrow-key navigation in composite widgets (tablists, toolbars, etc.).
 *
 * TODO: This augmentation can be removed once React's type definitions
 * natively support this attribute.
 */
declare module "react" {
	interface HTMLAttributes<T> {
		focusgroup?: string | undefined;
	}
}
`;

/**
 * Appends the focusgroup type augmentation to the given file.
 *
 * @param {string} filePath - Absolute path to the React entrypoint (`src/index.ts`)
 * @returns {boolean} `true` if the augmentation was written, otherwise `false`
 */
const appendFocusgroupAugmentation = (filePath) => {
	if (!fs.existsSync(filePath)) {
		console.warn(
			`[react-focusgroup] Entrypoint "${filePath}" not found — skipping augmentation`
		);
		return false;
	}

	const source = fs.readFileSync(filePath, 'utf-8');

	const normalized = source.replace(/\s*$/, '\n');
	fs.writeFileSync(filePath, normalized + AUGMENTATION, 'utf-8');
	return true;
};

/**
 * Mitosis `build.post` plugin that augments the generated React entrypoint with
 * the focusgroup attribute type.
 *
 * Registered for the React target only (see `configs/react/index.cjs`).
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'react-focusgroup',
	build: {
		post: createBuildPostHandler(appendFocusgroupAugmentation)
	}
});

module.exports.AUGMENTATION = AUGMENTATION;
module.exports.appendFocusgroupAugmentation = appendFocusgroupAugmentation;
