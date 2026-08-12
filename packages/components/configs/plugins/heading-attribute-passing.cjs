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

	const reactImport = 'import * as React from "react";';
	const hooksImport = 'import { useRef } from "react";';
	const functionDeclaration = 'function DBHeading(props: DBHeadingProps) {';
	const refDeclaration =
		'const _ref = useRef<HTMLHeadingElement | any>(null);';
	const defaultExport = 'export default DBHeading;';
	for (const marker of [
		reactImport,
		hooksImport,
		functionDeclaration,
		refDeclaration,
		defaultExport
	]) {
		if (code.split(marker).length !== 2) {
			fail('react', `expected exactly one ${marker}`);
		}
	}

	const rootProps = JSON.stringify(ROOT_PROPS);
	let changedCode = roots.reduce((result, [tag, openingTag]) => {
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
		return result.replace(openingTag, replacement);
	}, code);

	changedCode = changedCode
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
			'function DBHeadingFn(props: Omit<HTMLAttributes<HTMLHeadingElement | any>, keyof DBHeadingProps> & DBHeadingProps, component: any) {'
		)
		.replace(
			refDeclaration,
			'const _ref = component || useRef<HTMLHeadingElement | any>(component);'
		)
		.replace(
			defaultExport,
			`const DBHeading = forwardRef<
HTMLHeadingElement | any, Omit<HTMLAttributes<HTMLHeadingElement | any>,
keyof DBHeadingProps> & DBHeadingProps
>(DBHeadingFn);
export default DBHeading;`
		);
	return changedCode;
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
	return changedCode.replace(
		propsDeclaration,
		'const props = withDefaults(defineProps<DBHeadingProps>(), { paragraphSpacing: undefined });'
	);
};

const transformHeadingAttributePassing = (code, target, componentName) => {
	if (componentName !== 'DBHeading') return code;
	if (target === 'react') return transformReact(code);
	if (target === 'vue') return transformVue(code);
	fail(target, 'unsupported target');
};

const copyHeadingSpec = (targetContext, files) => {
	if (!files || !['react', 'vue'].includes(targetContext.target)) return;
	const fs = require('node:fs');
	const path = require('node:path');
	const headingFile = files.componentFiles.find((file) =>
		/components\/heading\/heading\.(tsx|vue)$/.test(file.outputFilePath)
	);
	if (!headingFile) {
		const hasFigmaHeading = files.componentFiles.some((file) =>
			/components\/heading\/figma\/heading\.figma\.batch\.ts$/.test(
				file.outputFilePath
			)
		);
		if (hasFigmaHeading) return;
		fail(targetContext.target, 'generated heading file not found');
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
		source = source
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

module.exports.transformHeadingAttributePassing =
	transformHeadingAttributePassing;
module.exports.copyHeadingSpec = copyHeadingSpec;
