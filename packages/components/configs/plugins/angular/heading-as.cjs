const TEMPLATE_PATTERN = /template: `([\s\S]*?)`,\n  styles:/;
const TEMPLATE_AS_PATTERN = /\bas\(\)/g;
const PROXY_ANCHOR = '  protected readonly cls = cls;';
const INPUT_DECLARATION =
	'  as: InputSignal<DBHeadingProps["as"]> = input<DBHeadingProps["as"]>();';
const REQUIRED_INPUT_DECLARATION =
	'  as: InputSignal<DBHeadingProps["as"]> = input.required<DBHeadingProps["as"]>();';

const fail = (message) => {
	throw new Error(
		`Angular DBHeading as transform failed: ${message}. ` +
			'The generated DBHeading format may have changed.'
	);
};

const transformHeadingAs = (code, componentName) => {
	if (componentName !== 'DBHeading') return code;

	const templateMatch = code.match(TEMPLATE_PATTERN);
	if (!templateMatch) fail('could not find the inline template');

	const templateCalls = templateMatch[1].match(TEMPLATE_AS_PATTERN) ?? [];
	if (templateCalls.length !== 10) {
		fail(`expected 10 template as() calls, found ${templateCalls.length}`);
	}
	if (code.split(PROXY_ANCHOR).length !== 2) {
		fail('could not find the class proxy anchor exactly once');
	}
	if (code.split(INPUT_DECLARATION).length !== 2) {
		fail('could not find the public as input declaration exactly once');
	}

	const transformedTemplate = templateMatch[0].replace(
		TEMPLATE_AS_PATTERN,
		'headingAs()'
	);
	return code
		.replace(templateMatch[0], transformedTemplate)
		.replace(
			PROXY_ANCHOR,
			`  protected readonly headingAs = () => this.as();\n${PROXY_ANCHOR}`
		)
		.replace(INPUT_DECLARATION, REQUIRED_INPUT_DECLARATION);
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	code: {
		post: (code, json) => transformHeadingAs(code, json.name)
	}
});

module.exports.transformHeadingAs = transformHeadingAs;
