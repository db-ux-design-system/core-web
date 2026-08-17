const ROOT_PROPS = require('./react/root-props.cjs');

const getHeading = (componentName) => {
	if (componentName === 'DBCustomHeading') {
		return {
			tag: 'div',
			propsType: 'DBCustomHeadingProps',
			elementType: 'HTMLDivElement'
		};
	}
	const match = /^DBHeadingH([1-6])$/.exec(componentName);
	return match
		? {
				tag: `h${match[1]}`,
				propsType: `${componentName}Props`,
				elementType: 'HTMLHeadingElement'
			}
		: undefined;
};

const fail = (componentName, target, message) => {
	throw new Error(
		`${componentName} ${target} attribute-passing transform failed: ${message}`
	);
};

const getOpeningTag = (code, tag, componentName, target) => {
	const openingTags = code.match(new RegExp(`<${tag}\\b[\\s\\S]*?>`, 'g'));
	const closingTags = code.match(new RegExp(`</${tag}>`, 'g'));
	if (openingTags?.length !== 1 || closingTags?.length !== 1) {
		fail(componentName, target, `expected exactly one ${tag} root`);
	}
	return openingTags[0];
};

const replaceMarker = (value, marker, replacement, componentName, target) => {
	if (value.split(marker).length !== 2) {
		fail(componentName, target, `expected exactly one ${marker}`);
	}
	return value.replace(marker, replacement);
};

const transformReact = (code, componentName, heading) => {
	const openingTag = getOpeningTag(code, heading.tag, componentName, 'react');
	const refIndent = openingTag.match(/\n(\s*)ref=\{_ref\}/)?.[1];
	const classIndent = openingTag.match(/\n(\s*)className=/)?.[1];
	if (refIndent === undefined || classIndent === undefined) {
		fail(
			componentName,
			'react',
			`unexpected ${heading.tag} root attributes`
		);
	}

	const reactImport = 'import * as React from "react";';
	const hooksImport = 'import { useRef } from "react";';
	const functionDeclaration = `function ${componentName}(props: ${heading.propsType}) {`;
	const refDeclaration = `const _ref = useRef<${heading.elementType} | any>(null);`;
	const defaultExport = `export default ${componentName};`;
	const passingPropsFilter =
		componentName === 'DBCustomHeading'
			? [...ROOT_PROPS, 'role', 'aria-level']
			: ROOT_PROPS;
	let changed = replaceMarker(
		openingTag,
		'ref={_ref}',
		`ref={_ref}\n${refIndent}{...filterPassingProps(props,${JSON.stringify(passingPropsFilter)})}`,
		componentName,
		'react'
	);
	changed = replaceMarker(
		changed,
		'className=',
		`{...getRootProps(props,${JSON.stringify(ROOT_PROPS)})}\n${classIndent}className=`,
		componentName,
		'react'
	);
	return code
		.replace(openingTag, changed)
		.replace(
			reactImport,
			`${reactImport}\nimport { filterPassingProps, getRootProps } from "../../utils/react";`
		)
		.replace(
			hooksImport,
			'import { useRef, forwardRef, HTMLAttributes } from "react";'
		)
		.replace(
			functionDeclaration,
			`function ${componentName}Fn(props: Omit<HTMLAttributes<${heading.elementType} | any>, keyof ${heading.propsType}> & ${heading.propsType}, component: any) {`
		)
		.replace(
			refDeclaration,
			`const internalRef = useRef<${heading.elementType} | any>(null);\n  const _ref = component || internalRef;`
		)
		.replace(
			defaultExport,
			`const ${componentName} = forwardRef<\n${heading.elementType} | any, Omit<HTMLAttributes<${heading.elementType} | any>,\nkeyof ${heading.propsType}> & ${heading.propsType}\n>(${componentName}Fn);\nexport default ${componentName};`
		);
};

const transformVue = (code, componentName, heading) => {
	const openingTag = getOpeningTag(code, heading.tag, componentName, 'vue');
	const refIndent = openingTag.match(/\n(\s*)ref="_ref"/)?.[1];
	const classBinding = openingTag.match(/:class="([^"]*className[^"]*)"/);
	if (refIndent === undefined || classBinding?.length !== 2) {
		fail(componentName, 'vue', `unexpected ${heading.tag} root attributes`);
	}
	let changed = replaceMarker(
		openingTag,
		'ref="_ref"',
		`ref="_ref"\n${refIndent}v-bind="$attrs"`,
		componentName,
		'vue'
	);
	if (componentName === 'DBCustomHeading') {
		// `role` and `aria-level` must be applied after `$attrs` so the derived
		// heading semantics win over anything a consumer passes in.
		changed = replaceMarker(
			changed,
			`\n${refIndent}role="heading"`,
			'',
			componentName,
			'vue'
		);
		changed = replaceMarker(
			changed,
			'v-bind="$attrs"',
			`v-bind="$attrs"\n${refIndent}role="heading"`,
			componentName,
			'vue'
		);
	}
	// Vue consumers use `class`, React consumers use `className`, so both
	// aliases must be honoured without exposing a literal that Mitosis rewrites.
	changed = changed.replace(
		classBinding[0],
		`:class="${classBinding[1].replace('className', "props['class' + 'Name'] ?? props.class")}"`
	);
	const propsDeclaration = `const props = defineProps<${heading.propsType}>();`;
	let changedCode = replaceMarker(
		code.replace(openingTag, changed),
		propsDeclaration,
		`const props = withDefaults(defineProps<${heading.propsType}>(), { paragraphSpacing: undefined });`,
		componentName,
		'vue'
	);
	if (componentName === 'DBCustomHeading') {
		// Vue applies automatic attribute fallthrough after rendering, which would
		// override the derived `role` and `aria-level` again. The template already
		// binds `$attrs` explicitly, so opting out keeps every other attribute
		// while the heading semantics stay in the component's hands.
		changedCode = replaceMarker(
			changedCode,
			'defineOptions({\n  name: "DBCustomHeading",\n});',
			'defineOptions({\n  name: "DBCustomHeading",\n  inheritAttrs: false,\n});',
			componentName,
			'vue'
		);
	}
	return changedCode;
};

/**
 * Angular and stencil forward every `aria-*` attribute from the custom element
 * host to the inner element. For `DBCustomHeading`, consumer-provided `role`
 * and `aria-level` would otherwise leave contradictory heading semantics on
 * the host. Remove both before forwarding the remaining attributes.
 */
const transformCustomHeadingAttributePassing = (
	code,
	componentName,
	target
) => {
	if (componentName !== 'DBCustomHeading') return code;
	let changedCode = replaceMarker(
		code,
		'if (element && parent) {',
		`if (element && parent) {
      parent.removeAttribute("role");
      parent.removeAttribute("aria-level");`,
		componentName,
		target
	);
	changedCode = replaceMarker(
		changedCode,
		"attr && attr.name !== 'data-density' &&",
		"attr && attr.name !== 'data-density' && attr.name !== 'aria-level' &&",
		componentName,
		target
	);
	return changedCode;
};

const transformAngular = (code, componentName) => {
	if (componentName !== 'DBCustomHeading') return code;
	const semanticLevelInput = 'input<DBCustomHeadingProps["semanticLevel"]>()';
	return replaceMarker(
		transformCustomHeadingAttributePassing(code, componentName, 'angular'),
		semanticLevelInput,
		'input.required<DBCustomHeadingProps["semanticLevel"]>()',
		componentName,
		'angular'
	);
};

const transformStencil = (code, componentName) => {
	if (componentName !== 'DBCustomHeading') return code;
	return replaceMarker(
		transformCustomHeadingAttributePassing(code, componentName, 'stencil'),
		'@Prop() semanticLevel: DBCustomHeadingProps["semanticLevel"];',
		'@Prop() semanticLevel!: DBCustomHeadingProps["semanticLevel"];',
		componentName,
		'stencil'
	);
};

const transformHeadingAttributePassing = (code, target, componentName) => {
	const heading = getHeading(componentName);
	if (!heading) return code;
	if (target === 'angular') return transformAngular(code, componentName);
	if (target === 'stencil') return transformStencil(code, componentName);
	if (target === 'react') return transformReact(code, componentName, heading);
	if (target === 'vue') return transformVue(code, componentName, heading);
	fail(componentName, target, 'unsupported target');
};

const copyHeadingSpec = (targetContext, files) => {
	if (!files || !['react', 'vue'].includes(targetContext.target)) return;
	const fs = require('node:fs');
	const path = require('node:path');
	const headingFile = files.componentFiles.find((file) =>
		/components\/heading\/heading-h1\.(tsx|vue)$/.test(file.outputFilePath)
	);
	if (!headingFile) {
		const hasHeadingBatch = files.componentFiles.some((file) =>
			/components\/heading\/(?:figma\/heading\.figma\.batch|examples\/.+\.stories)\.(?:ts|tsx)$/.test(
				file.outputFilePath
			)
		);
		if (hasHeadingBatch) return;
		fail(
			'DBHeading',
			targetContext.target,
			'generated heading-h1 file not found'
		);
	}
	const sourceFile = path.resolve(
		__dirname,
		'../../src/components/heading/heading.spec.tsx'
	);
	const targetFile = path.resolve(
		headingFile.outputDir,
		path.dirname(headingFile.outputFilePath),
		'heading.spec.tsx'
	);
	let source = fs.readFileSync(sourceFile, 'utf-8');
	if (targetContext.target === 'vue') {
		const reactCtImport = '@playwright/experimental-ct-react';
		if (source.split(reactCtImport).length !== 2) {
			fail(
				'DBHeading',
				'vue',
				`expected exactly one ${reactCtImport} import`
			);
		}
		source = source
			.replace(reactCtImport, '@playwright/experimental-ct-vue')
			.replace(/\{\/\*/g, '')
			.replace(/\*\/}/g, '')
			.replace(/\/\/ VUE:/g, '');
	}
	fs.writeFileSync(targetFile, source, 'utf-8');
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	name: 'heading-attribute-passing',
	code: {
		post: (code, json) =>
			transformHeadingAttributePassing(
				code,
				json.pluginData.target,
				json.name
			)
	},
	build: { post: copyHeadingSpec }
});

module.exports.copyHeadingSpec = copyHeadingSpec;
module.exports.transformHeadingAttributePassing =
	transformHeadingAttributePassing;
