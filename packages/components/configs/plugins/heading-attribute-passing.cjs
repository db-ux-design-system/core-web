const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const ROOT_PROPS = [
	'data-icon-variant',
	'data-icon-variant-before',
	'data-icon-variant-after',
	'data-icon-weight',
	'data-icon-weight-before',
	'data-icon-weight-after',
	'data-interactive',
	'data-force-mobile',
	'data-color',
	'data-container-color',
	'data-bg-color',
	'data-on-bg-color',
	'data-color-scheme',
	'data-font-size',
	'data-headline-size',
	'data-divider',
	'data-focus',
	'data-font',
	'data-density'
];

const fail = (target, message) => {
	throw new Error(
		`DBHeading ${target} attribute-passing transform failed: ${message}`
	);
};

const getOpeningTags = (code, target) =>
	HEADING_TAGS.map((tag) => {
		const openingTags = code.match(
			new RegExp(`<${tag}\\b[\\s\\S]*?>`, 'g')
		);
		const closingTags = code.match(new RegExp(`</${tag}>`, 'g'));
		if (openingTags?.length !== 1 || closingTags?.length !== 1) {
			fail(target, `expected exactly one ${tag} root`);
		}
		return [tag, openingTags[0]];
	});

const replaceMarker = (openingTag, marker, replacement, target, tag) => {
	if (openingTag.split(marker).length !== 2) {
		fail(target, `expected exactly one ${marker} on ${tag}`);
	}
	return openingTag.replace(marker, replacement);
};

const transformReact = (code) => {
	const roots = getOpeningTags(code, 'react');
	for (const [tag, openingTag] of roots) {
		const refIndent = openingTag.match(/\n(\s*)ref=\{_ref\}/)?.[1];
		const classIndent = openingTag.match(/\n(\s*)className=/)?.[1];
		if (refIndent === undefined || classIndent === undefined) {
			fail('react', `unexpected ${tag} root attributes`);
		}
	}

	const rootProps = JSON.stringify(ROOT_PROPS);
	return roots.slice(1).reduce((changedCode, [tag, openingTag]) => {
		const refIndent = openingTag.match(/\n(\s*)ref=\{_ref\}/)[1];
		const classIndent = openingTag.match(/\n(\s*)className=/)[1];
		let replacement = replaceMarker(
			openingTag,
			'ref={_ref}',
			`ref={_ref}\n${refIndent}{...filterPassingProps(props,${rootProps})}`,
			'react',
			tag
		);
		replacement = replaceMarker(
			replacement,
			'className=',
			`{...getRootProps(props,${rootProps})}\n${classIndent}className=`,
			'react',
			tag
		);
		return changedCode.replace(openingTag, replacement);
	}, code);
};

const transformVue = (code) => {
	const roots = getOpeningTags(code, 'vue');
	return roots.reduce((changedCode, [tag, openingTag]) => {
		const refIndent = openingTag.match(/\n(\s*)ref="_ref"/)?.[1];
		if (refIndent === undefined || !openingTag.includes('\n')) {
			fail('vue', `unexpected ${tag} root attributes`);
		}
		const replacement = replaceMarker(
			openingTag,
			'ref="_ref"',
			`ref="_ref"\n${refIndent}v-bind="$attrs"`,
			'vue',
			tag
		);
		return changedCode.replace(openingTag, replacement);
	}, code);
};

const transformHeadingAttributePassing = (code, target, componentName) => {
	if (componentName !== 'DBHeading') return code;
	if (target === 'react') return transformReact(code);
	if (target === 'vue') return transformVue(code);
	fail(target, 'unsupported target');
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	code: {
		post: (code, json) =>
			transformHeadingAttributePassing(
				code,
				json.pluginData.target,
				json.name
			)
	}
});

module.exports.transformHeadingAttributePassing =
	transformHeadingAttributePassing;
