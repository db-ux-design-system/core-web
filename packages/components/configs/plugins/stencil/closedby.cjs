const fs = require('node:fs');
const path = require('node:path');

/**
 * Type augmentation that extends Stencil's JSXBase.DialogHTMLAttributes with
 * the `closedby` HTML attribute for native light-dismiss behaviour.
 *
 * Stencil's type definitions do not ship this attribute yet, so the generated
 * drawer component would otherwise get a type error. The augmentation is
 * type-only, so it adds no runtime code to the published bundle.
 *
 * TODO: This augmentation can be removed once Stencil's type definitions
 * natively support the closedby attribute.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby
 */
const DECLARATION = `/**
 * Type augmentation for the closedby HTML attribute on <dialog>
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby
 *
 * Extends Stencil's DialogHTMLAttributes to include the \`closedby\` attribute
 * for native light-dismiss (ESC key and backdrop click) behaviour.
 *
 * TODO: This augmentation can be removed once Stencil's type definitions
 * natively support this attribute.
 */
import { JSXBase } from "@stencil/core/internal";

declare module "@stencil/core/internal" {
\tnamespace JSXBase {
\t\tinterface DialogHTMLAttributes<T> {
\t\t\tclosedby?: "any" | "closerequest" | "none";
\t\t}
\t}
}
`;

/**
 * Writes a closedby.d.ts file into the Stencil output's src/ directory.
 *
 * @param {string} outputDir - Absolute path to the Stencil output root
 * @returns {boolean} `true` if the file was written
 */
const writeClosedbyDeclaration = (outputDir) => {
	const srcDir = path.resolve(outputDir, 'src');
	if (!fs.existsSync(srcDir)) {
		console.warn(
			`[stencil-closedby] src/ directory "${srcDir}" not found — skipping`
		);
		return false;
	}

	const filePath = path.resolve(srcDir, 'closedby.d.ts');
	fs.writeFileSync(filePath, DECLARATION, 'utf-8');
	return true;
};

/**
 * Mitosis `build.post` plugin that writes the closedby type declaration
 * into the Stencil output.
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'stencil-closedby',
	build: {
		post: (targetContext, files) => {
			if (!files) return;

			const anyFile =
				(files.nonComponentFiles || [])[0] ||
				(files.componentFiles || [])[0];
			if (!anyFile) return;

			writeClosedbyDeclaration(anyFile.outputDir);
		}
	}
});

module.exports.DECLARATION = DECLARATION;
module.exports.writeClosedbyDeclaration = writeClosedbyDeclaration;
