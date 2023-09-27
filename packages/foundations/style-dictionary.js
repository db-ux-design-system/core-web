const StyleDictionary = require('style-dictionary').extend(
	'style-dictionary.config.json'
);
const minifyDictionary = require('style-dictionary/lib/common/formatHelpers/minifyDictionary');
const transforms = require('style-dictionary/lib/common/transforms');

const modifyTailwind = (dictionary) => {
	for (const token of [
		'colors',
		'font',
		'transition',
		'sizing',
		'typography'
	]) {
		if (dictionary[token]) {
			delete dictionary[token];
		}
	}

	for (const spacing of ['responsive', 'fixed']) {
		if (dictionary.spacing?.[spacing]) {
			delete dictionary.spacing[spacing];
		}
	}
};

StyleDictionary.registerFilter({
	name: 'targetNonWeb',
	matcher: (token) => token.attributes.target !== 'web'
});

StyleDictionary.registerFormat({
	name: 'tailwind',
	formatter({ dictionary }) {
		const minifiedDic = minifyDictionary(dictionary.tokens);
		modifyTailwind(minifiedDic);
		return JSON.stringify(minifiedDic, null, 2);
	}
});

const getPathTransform = (orgTransform, token, options) => {
	return transforms[orgTransform].transformer(
		{
			...token,
			path: token.path.map((p) => p.replace('.', 'p'))
		},
		options
	);
};

StyleDictionary.registerTransform({
	type: `name`,
	name: `name/dotty/pascal`,
	transformer(token, options) {
		return getPathTransform('name/cti/pascal', token, options);
	}
});

StyleDictionary.registerTransform({
	type: `name`,
	name: `name/dotty/camel`,
	transformer(token, options) {
		return getPathTransform('name/cti/camel', token, options);
	}
});

StyleDictionary.registerTransform({
	type: `value`,
	name: `size/real/rem`,
	matcher: (token) => token.attributes.category === 'size',
	transformer(token) {
		if (token.attributes.screen) {
			return token.value;
		}

		return `${Number(token.value) / 16}rem`;
	}
});

StyleDictionary.registerTransform({
	type: `value`,
	name: `size/upscale/screen`,
	matcher: (token) => token.attributes.screen === true,
	transformer(token) {
		return `${Number(token.value) * 16}px`;
	}
});

StyleDictionary.registerTransform({
	type: `value`,
	name: `size/divide/rem`,
	matcher: (token) => token.attributes.category === 'size',
	transformer(token) {
		return `${Number(token.value) / 16}`;
	}
});

StyleDictionary.registerTransformGroup({
	name: 'JS',
	transforms: [
		'attribute/cti',
		'name/dotty/pascal',
		'size/upscale/screen',
		'size/real/rem',
		'color/hex'
	]
});

StyleDictionary.registerTransformGroup({
	name: 'CSS',
	transforms: [
		'attribute/cti',
		'name/cti/kebab',
		'time/seconds',
		'content/icon',
		'size/upscale/screen',
		'size/real/rem',
		'color/css'
	]
});

StyleDictionary.registerTransformGroup({
	name: 'SCSS',
	transforms: [
		'attribute/cti',
		'name/cti/kebab',
		'time/seconds',
		'content/icon',
		'size/upscale/screen',
		'size/real/rem',
		'color/css'
	]
});

StyleDictionary.registerTransformGroup({
	name: 'Swift',
	transforms: [
		'attribute/cti',
		'name/dotty/camel',
		'color/UIColorSwift',
		'content/swift/literal',
		'asset/swift/literal',
		'size/divide/rem',
		'size/swift/remToCGFloat',
		'font/swift/literal'
	]
});

StyleDictionary.registerTransformGroup({
	name: 'Compose',
	transforms: [
		'attribute/cti',
		'name/dotty/camel',
		'color/composeColor',
		'size/divide/rem',
		'size/compose/remToSp',
		'size/compose/remToDp'
	]
});

StyleDictionary.buildAllPlatforms();
