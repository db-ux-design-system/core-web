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
	let changed = replaceMarker(
		openingTag,
		'ref={_ref}',
		`ref={_ref}\n${refIndent}{...filterPassingProps(props,${JSON.stringify(ROOT_PROPS)})}`,
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

/*
 * Only the `class` alias is left here. Two things this deliberately does not do:
 *  - No `v-bind="$attrs"`. With a single root element and `inheritAttrs` at its
 *    default, Vue already forwards every undeclared attribute, so an explicit
 *    binding is redundant.
 *  - No `withDefaults(...)`. `useDefaultProps` in the lite components makes
 *    Mitosis emit that declaration natively, the same way every other component
 *    gets it.
 */
const transformVue = (code, componentName, heading) => {
	const openingTag = getOpeningTag(code, heading.tag, componentName, 'vue');
	const classBinding = openingTag.match(/:class="([^"]*className[^"]*)"/);
	if (classBinding?.length !== 2) {
		fail(componentName, 'vue', `unexpected ${heading.tag} root attributes`);
	}
	// Vue consumers use `class`, React consumers use `className`, so both
	// aliases are honoured. Heading is not part of the deprecated post-build
	// registry, so the plain `className` literal is safe here: nothing rewrites
	// it to `props.class` afterwards.
	const withClassAlias = openingTag.replace(
		classBinding[0],
		`:class="${classBinding[1].replace('className', 'props.className ?? props.class')}"`
	);
	return code.replace(openingTag, withClassAlias);
};

const transformHeadingAttributePassing = (code, target, componentName) => {
	const heading = getHeading(componentName);
	if (!heading) return code;
	// Only registered for react and vue. Angular and stencil need no
	// heading-specific transform: they forward `data-*` and `aria-*` from the
	// custom-element host through the generic `attribute-passing` plugin, and no
	// Heading component derives semantics a consumer attribute could contradict.
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
			/components\/heading\/(?:figma\/.+\.figma\.batch|examples\/.+\.stories)\.(?:ts|tsx)$/.test(
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
