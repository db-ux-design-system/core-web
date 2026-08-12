const ROOT_PROPS = require('./react/root-props.cjs');

const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

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
	let changedCode = roots.reduce((changedCode, [tag, openingTag]) => {
		const refIndent = openingTag.match(/\n(\s*)ref="_ref"/)?.[1];
		const classBinding = openingTag.match(/:class="([^"]*className[^"]*)"/);
		if (
			refIndent === undefined ||
			!openingTag.includes('\n') ||
			classBinding?.length !== 2
		) {
			fail('vue', `unexpected ${tag} root attributes`);
		}
		let replacement = replaceMarker(
			openingTag,
			'ref="_ref"',
			`ref="_ref"\n${refIndent}v-bind="$attrs"`,
			'vue',
			tag
		);
		replacement = replacement.replace(
			classBinding[0],
			`:class="${classBinding[1].replace(
				'className',
				"props['class' + 'Name'] ?? props.class"
			)}"`
		);
		return changedCode.replace(openingTag, replacement);
	}, code);

	const propsDeclaration = 'const props = defineProps<DBHeadingProps>();';
	if (changedCode.split(propsDeclaration).length !== 2) {
		fail('vue', 'expected the DBHeading props declaration exactly once');
	}
	changedCode = changedCode.replace(
		propsDeclaration,
		'const props = withDefaults(defineProps<DBHeadingProps>(), { paragraphSpacing: undefined });'
	);
	return changedCode;
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
