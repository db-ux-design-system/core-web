// TODO: Could get removed as soon as StencilJS updated their TypeScript dependency to at least version 5.9.2 (most likely not before Stencil v5)
const fs = require('node:fs');
const path = require('node:path');

/**
 * Type augmentation that adds the `requestClose()` method to `HTMLDialogElement`.
 *
 * Stencil's bundled TypeScript lib does not include this method yet, so the
 * generated drawer component would otherwise get a type error. The augmentation
 * is type-only, so it adds no runtime code to the published bundle.
 *
 * TODO: This augmentation can be removed once Stencil's TypeScript version
 * natively includes `requestClose()` in `HTMLDialogElement`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/requestClose
 */
const DECLARATION = `/**
 * Type augmentation for HTMLDialogElement.requestClose()
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/requestClose
 *
 * Adds the \`requestClose()\` method which issues a close request that can
 * be vetoed via the cancel event's preventDefault().
 *
 * TODO: Remove once the TypeScript lib used by Stencil includes this method.
 */
interface HTMLDialogElement {
\trequestClose(returnValue?: string): void;
}
`;

/**
 * Writes a request-close.d.ts file into the Stencil output's src/ directory.
 *
 * @param {string} outputDir - Absolute path to the Stencil output root
 * @returns {boolean} `true` if the file was written
 */
const writeRequestCloseDeclaration = (outputDir) => {
	const srcDir = path.resolve(outputDir, 'src');
	if (!fs.existsSync(srcDir)) {
		console.warn(
			`[stencil-request-close] src/ directory "${srcDir}" not found — skipping`
		);
		return false;
	}

	const filePath = path.resolve(srcDir, 'request-close.d.ts');
	fs.writeFileSync(filePath, DECLARATION, 'utf-8');
	return true;
};

/**
 * Mitosis `build.post` plugin that writes the requestClose type declaration
 * into the Stencil output.
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'stencil-request-close',
	build: {
		post: (targetContext, files) => {
			if (!files) return;

			const anyFile =
				(files.nonComponentFiles || [])[0] ||
				(files.componentFiles || [])[0];
			if (!anyFile) return;

			writeRequestCloseDeclaration(anyFile.outputDir);
		}
	}
});

module.exports.DECLARATION = DECLARATION;
module.exports.writeRequestCloseDeclaration = writeRequestCloseDeclaration;
