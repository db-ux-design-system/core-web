const fs = require('node:fs');
const path = require('node:path');

/**
 * Type augmentation that extends Stencil's JSXBase.HTMLAttributes with the
 * `focusgroup` HTML attribute for declarative keyboard navigation.
 *
 * Stencil's type definitions do not ship this attribute yet, so the generated
 * tab-list component would otherwise get a type error. The augmentation is
 * type-only, so it adds no runtime code to the published bundle.
 *
 * TODO: This augmentation can be removed once Stencil's type definitions
 * natively support the focusgroup attribute.
 *
 * @see https://developer.chrome.com/blog/focusgroup-rfc
 */
const DECLARATION = `/**
 * Type augmentation for the focusgroup HTML attribute
 * https://developer.chrome.com/blog/focusgroup-rfc
 *
 * Extends Stencil's HTMLAttributes to include the \`focusgroup\` attribute for
 * declarative arrow-key navigation in composite widgets (tablists, toolbars, etc.).
 *
 * TODO: This augmentation can be removed once Stencil's type definitions
 * natively support this attribute.
 */
import { JSXBase } from "@stencil/core/internal";

declare module "@stencil/core/internal" {
	namespace JSXBase {
		interface HTMLAttributes<T = HTMLElement> {
			focusgroup?: string;
			focusgroupstart?: string;
		}
	}
}
`;

/**
 * Writes a focusgroup.d.ts file into the Stencil output's src/ directory.
 *
 * @param {string} outputDir - Absolute path to the Stencil output root
 * @returns {boolean} `true` if the file was written
 */
const writeFocusgroupDeclaration = (outputDir) => {
	const srcDir = path.resolve(outputDir, 'src');
	if (!fs.existsSync(srcDir)) {
		console.warn(
			`[stencil-focusgroup] src/ directory "${srcDir}" not found — skipping`
		);
		return false;
	}

	const filePath = path.resolve(srcDir, 'focusgroup.d.ts');
	fs.writeFileSync(filePath, DECLARATION, 'utf-8');
	return true;
};

/**
 * Mitosis `build.post` plugin that writes the focusgroup type declaration
 * into the Stencil output.
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'stencil-focusgroup',
	build: {
		post: (targetContext, files) => {
			if (!files) return;

			// Determine the output directory from any non-component file
			const anyFile =
				(files.nonComponentFiles || [])[0] ||
				(files.componentFiles || [])[0];
			if (!anyFile) return;

			writeFocusgroupDeclaration(anyFile.outputDir);
		}
	}
});

module.exports.DECLARATION = DECLARATION;
module.exports.writeFocusgroupDeclaration = writeFocusgroupDeclaration;
