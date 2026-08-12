// Angular projects content only once, so repeating `<ng-content>` inside every
// conditional heading root leaves all but the last root empty. We therefore
// declare the projected content a single time inside an `<ng-template>` and
// instantiate it in the active root via `ngTemplateOutlet`.
const SLOT_BLOCK_PATTERN =
	/<ng-content select="\[start-slot\]">\s*<\/ng-content>\s*<ng-content>\s*<\/ng-content>\s*<ng-content select="\[end-slot\]">\s*<\/ng-content>/g;

const HEADING_ROOTS = 6;

const CONTENT_TEMPLATE =
	'<ng-template #headingContent>' +
	'<ng-content select="[start-slot]"></ng-content>' +
	'<ng-content></ng-content>' +
	'<ng-content select="[end-slot]"></ng-content>' +
	'</ng-template>';

const OUTLET =
	'<ng-container *ngTemplateOutlet="headingContent"></ng-container>';

const TEMPLATE_START = 'template: `';

const fail = (message) => {
	throw new Error(
		`Angular DBHeading content-projection transform failed: ${message}. ` +
			'The generated DBHeading format may have changed.'
	);
};

const transformHeadingContentProjection = (code, componentName) => {
	if (componentName !== 'DBHeading') return code;

	const slotBlocks = code.match(SLOT_BLOCK_PATTERN) ?? [];
	if (slotBlocks.length !== HEADING_ROOTS) {
		fail(
			`expected ${HEADING_ROOTS} projected slot blocks, found ${slotBlocks.length}`
		);
	}

	if (code.split(TEMPLATE_START).length !== 2) {
		fail('could not find the inline template exactly once');
	}

	return code
		.replace(SLOT_BLOCK_PATTERN, OUTLET)
		.replace(TEMPLATE_START, `${TEMPLATE_START}${CONTENT_TEMPLATE}`);
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	code: {
		post: (code, json) => transformHeadingContentProjection(code, json.name)
	}
});

module.exports.transformHeadingContentProjection =
	transformHeadingContentProjection;
