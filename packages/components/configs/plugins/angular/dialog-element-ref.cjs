/**
 * Types the generated Angular `_ref` of DBDialog as `HTMLDialogElement`.
 *
 * Mitosis emits an untyped `viewChild<ElementRef>("_ref")`, so
 * `nativeElement` is `any` and the dialog specific members (`open`,
 * `showModal()`, `close()`, `requestClose()`) neither type-check nor show up in
 * editor completion for consumers reading the ref.
 *
 * Written as a plugin instead of a `scripts/post-build/components.ts`
 * overwrite: `scripts/post-build/` is deprecated for new transformations, and
 * the string overwrite the other components use (`<HTMLElement>` ->
 * `<HTMLxxxElement>`) no longer matches anything in the current Mitosis output.
 */
const REPLACEMENTS = [
	[
		'viewChild<ElementRef>("_ref")',
		'viewChild<ElementRef<HTMLDialogElement>>("_ref")'
	],
	/* `nativeElement` is no longer `any` once the ref is typed, so the optional
	 * chain in the generated attribute passing call has to be widened to the
	 * declared `null`. */
	[
		'const element: HTMLElement | null = this._ref()?.nativeElement;',
		'const element: HTMLElement | null = this._ref()?.nativeElement ?? null;'
	]
];

/**
 * @param {string} code the generated Angular component
 * @param {string} componentName the Mitosis component name, e.g. `DBDialog`
 * @returns {string} the code with the dialog ref typed
 */
const transformDialogElementRef = (code, componentName) => {
	if (componentName !== 'DBDialog') return code;

	let changedCode = code;
	for (const [from, to] of REPLACEMENTS) {
		if (!changedCode.includes(from)) {
			throw new Error(
				`Angular dialog element ref: Could not find ${JSON.stringify(from)} in ${componentName}. ` +
					'The generated DBDialog format may have changed.'
			);
		}

		changedCode = changedCode.replace(from, to);
	}

	return changedCode;
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	code: {
		post: (code, json) => transformDialogElementRef(code, json.name)
	}
});

module.exports.transformDialogElementRef = transformDialogElementRef;
